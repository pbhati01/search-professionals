import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createUseStyles } from 'react-jss';
import classnames from 'classnames';
import { fetchCategories, fetchProfessionals } from '../../redux/actions';
import { getCategories, getProfessionals, getHeaders } from '../../redux/selectors';
import styles from './SearchProsfessionals.styles';
import Reviews from '../Reviews';

const useStyles = createUseStyles(styles);

const SearchProsfessionals = () => {
  const classes = useStyles();
  const [selectedCategory, setSelectedCategory] = useState('-1');
  const [postCode, setPostCode] = useState('');
  const [prosSearchRequest, setProsSearchRequest] = useState({});
  const [onSubmit, setOnSubmit] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [paginationPages, setPaginationPages] = useState([]);
  const categories = useSelector(getCategories);
  const professionals = useSelector(getProfessionals);
  const headers = useSelector(getHeaders);
  const pageLimit = 20;
  const numOfPages = headers['x-pagination-count'] ? Math.ceil(headers['x-pagination-count'] / pageLimit) : 1;
  const postalCodeRegex = RegExp('^(([A-Z]{1,2}[0-9][A-Z0-9]?|ASCN|STHL|TDCU|BBND|[BFS]IQQ|PCRN|TKCA) ?[0-9][A-Z]{2}|BFPO ?[0-9]{1,4}|(KY[0-9]|MSR|VG|AI)[ -]?[0-9]{4}|[A-Z]{2} ?[0-9]{2}|GE ?CX|GIR ?0A{2}|SAN ?TA1)$');
  const nameRegex = /([A-Za-z]+[\d@]+[\w@]*|[\d@]+[A-Za-z]+[\w@]*)/g;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);
  useEffect(() => {
    let currentPages = [];
    if ( numOfPages > 5) {
      currentPages = [1,2,3,4,5];
    }
    else {
      for(let page=1; page < numOfPages; page++) {
        currentPages.push(page);
      }
    }
    setPaginationPages(currentPages);
  }, [numOfPages])
  const getCategoryOptions = () => {
    return categories.map(category => <option key={category.id} value={category.id}>{category.name}</option>);
  }
  const validateSearch = () => {
    return (selectedCategory !== '' && selectedCategory !== '-1' && postCode !== '' && postalCodeRegex.test(postCode));
  }
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  }
  const handlePostCodeChange = (e) => {
    setPostCode(e.target.value);
  }
  const searchPros = () => {
    const onSearch = true;
    setOnSubmit(onSearch);
    const isValidForm = validateSearch();
    if (isValidForm) {
      const request = {
        data: {'category_id': selectedCategory, 'location': postCode.toLowerCase()},
        headers: { 'x-pagination-offset': 1, 'x-pagination-limit': pageLimit}
      }
      setProsSearchRequest(request.data);
      setPaginationPages([1,2,3,4,5]);
      setCurrentPage(1);
      dispatch(fetchProfessionals(request));
    }
  }
  const fetchPros = (pageNo) => {
    const request = {
      data: prosSearchRequest,
      headers: { 'x-pagination-offset': pageNo * pageLimit, 'x-pagination-limit': pageLimit}
    }
    dispatch(fetchProfessionals(request));
  }
  const getProfessionalsListHtml = () => {
    let currentPageHtml = [];
    for (var index = 1; index < pageLimit && index < professionals.length; index++) {
      currentPageHtml.push(<tr key={`tr-${index}`}>
        <td>{professionals[index].id}</td>
        <td>{professionals[index].name.replace(nameRegex,'').trim()}</td>
        <td>{professionals[index].postcode}</td>
        <td><Reviews reviews={professionals[index].review_rating} /></td>
      </tr>);
    }
    return currentPageHtml; 
  }
  const getPaginationHtml = () => {
    let paginationHtml = [];
    paginationHtml.push(<button key='btn-prev' disabled={(currentPage === 1)} onClick={movePrev}>{'<<'}</button>);          
    paginationPages.forEach(page => {
      paginationHtml.push(<button key={`btn-${page}`} data-selected={(currentPage === page)} onClick={() => goToPage(page)}>{page}</button>);
    })
    paginationHtml.push(<button key='btn-next' disabled={(currentPage === numOfPages-1)} onClick={moveNext}>{'>>'}</button>);
    return paginationHtml;
  }
  const movePrev = () => {
    let page = currentPage;
    if (page > 1) {
        page--;
        if (page < 1) page = 1;
        if (page > numOfPages) page = numOfPages;
        if (!paginationPages.includes(page)) {
          changePaginationPages(page, 'prev');
        }
    }
    setCurrentPage(page);
    fetchPros(page);
  };
  const goToPage = (page) => {
    if (page !== currentPage) {
      setCurrentPage(page);
      fetchPros(page);
    }
  }
  const moveNext = () => {
    let page = currentPage;
    if (page < numOfPages) {
      page++;
      if (page < 1) page = 1;
      if (page > numOfPages) page = numOfPages;
      if (!paginationPages.includes(page)) {
        changePaginationPages(page, 'next');
      }
    }
    setCurrentPage(page);
    fetchPros(page);
  };
  const changePaginationPages = (page, action) => {
    let pages = paginationPages;
    if(action == 'next') {
      pages.shift();
      pages.push(page);
    }
    else {
      pages.pop();
      pages.unshift(page);
    }
    setPaginationPages(pages);
  }
  return (
    <section className={classes.container}>
      <div className={classes.searchBox}>
        <div>
          <label>Category</label>
          <select value={selectedCategory} className={classnames({[classes.required]: (selectedCategory === '-1' && onSubmit)})}
              onChange={handleCategoryChange}>
            <option key='select' value='-1'>Select Category</option>
            {getCategoryOptions()}
          </select>
        </div>
        <div>
          <label>Postcode</label>
          <input placeholder='Enter Postcode' className={classnames({[classes.required]: (postCode === '' && onSubmit)})}
            value={postCode.value} onChange={handlePostCodeChange}/>
          {(postCode === '' && onSubmit) ? <span>Please select postcode</span> : null}
          {(postCode !== '' && !postalCodeRegex.test(postCode)) ? <span>Please select valid input</span> : null}
        </div>
        <div>
          <button type='button' onClick={searchPros}>Submit</button>
        </div>
      </div>
      <div className={classes.professionalsList}>
        <table>
          <thead>
            <tr>
              <th><span>{'Id'}</span></th>
              <th><span>{'Name'}</span></th>
              <th><span>{'Postcode'}</span></th>
              <th><span>{'Review Rating'}</span></th>
            </tr>
          </thead>
          <tbody>
            {professionals.length > 0 ?
              getProfessionalsListHtml()
              : <tr><td colSpan={4} >No records found</td></tr>}
          </tbody>
        </table>
        {numOfPages > 2 ?
          <div className={classes.actionButton}>
            {getPaginationHtml()}
          </div> : null}
      </div>
    </section>
  );
};

export default SearchProsfessionals;