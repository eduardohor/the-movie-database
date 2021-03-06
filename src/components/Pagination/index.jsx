import { useState } from "react";

import styles from "./styles.module.scss";

export function Pagination(props) {
  const [pageNumberLimit, setPageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);
  const [btnPrev, setBtnPrev] = useState(false);

  function handleClick(event) {
    props.setCurrentPage(Number(event.target.id));
  }

  function handleNextPage() {
    props.setCurrentPage(props.currentPage + 1);

    if (props.currentPage + 1 > maxPageNumberLimit) {
      setBtnPrev(true);
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  }

  function handlePrevPage() {
    props.setCurrentPage(props.currentPage - 1);

    if ((props.currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  }

  function handleLastPage() {
    const lastPage = pages[pages.length - 1];
    props.setCurrentPage(lastPage);
    console.log(lastPage);
  }

  const pages = [];
  for (let i = 1; i <= props.totalPages && i <= 500; i++) {
    pages.push(i);
  }

  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li key={number} id={number} onClick={handleClick}>
          {number}
        </li>
      );
    } else {
      return null;
    }
  });

  return (
    <footer className={styles.numberPage}>
      <ul>
        {btnPrev ? (
          <li>
            <button
              onClick={handlePrevPage}
              disabled={props.currentPage === pages[0] ? true : false}
            >
              {" "}
              &lt;
            </button>
          </li>
        ) : null}
        {renderPageNumbers}
        <li>
          <button onClick={handleNextPage}>&gt;</button>{" "}
        </li>
        <li>
          <button onClick={handleLastPage}>??ltima</button>
        </li>
      </ul>
    </footer>
  );
}
