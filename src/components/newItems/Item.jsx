import React from "react";
import { Link } from "react-router-dom";
import addCartNewIcon from "../../icons/addCartNew.svg";

const NewItem = ({
  id,
  img,
  alt,
  title,
  price,
  ratting,
  onPlus,
  onProduct,
}) => {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isLike, setIsLike] = React.useState(false);

  const onClickPlus = () => {
    onPlus({ img, alt, title, price, ratting });
    setIsAdded(!isAdded);
  };

  function onChange() {
    setIsLike(!isLike);
  }

  const onClickProduct = () => {
    onProduct({ img, alt, title, price, ratting });
  };

  return (
    <Link to={"/product/" + id} className="item-card" onClick={onClickProduct}>
      <img width={106} height={80} src={img} alt={alt} className="item-img" />
      <div className="wrapper__item-info">
        <h5 className="title">{title}</h5>
        <h4 className="price">{price} ₽</h4>
      </div>
      <div className="wrapper__item-panel">
        <button
          className={`${isLike === true ? "like active" : "like"}`}
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
            onChange();
          }}
        >
          <svg
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.99998 17.9C9.71525 17.9 9.44075 17.7962 9.22682 17.6077C8.41887 16.897 7.63991 16.2291 6.95265 15.64L6.94914 15.6369C4.93422 13.9096 3.19427 12.4179 1.98364 10.9484C0.630339 9.30566 0 7.74809 0 6.04654C0 4.39334 0.563506 2.86816 1.58661 1.75175C2.62191 0.622137 4.0425 0 5.58715 0C6.74162 0 7.7989 0.367173 8.72954 1.09124C9.1992 1.45672 9.62492 1.90402 9.99998 2.42577C10.3752 1.90402 10.8008 1.45672 11.2706 1.09124C12.2012 0.367173 13.2585 0 14.413 0C15.9575 0 17.3782 0.622137 18.4135 1.75175C19.4366 2.86816 20 4.39334 20 6.04654C20 7.74809 19.3698 9.30566 18.0165 10.9483C16.8058 12.4179 15.066 13.9094 13.0514 15.6366C12.363 16.2267 11.5828 16.8956 10.773 17.608C10.5592 17.7962 10.2846 17.9 9.99998 17.9ZM5.58715 1.17858C4.37362 1.17858 3.25881 1.66579 2.44781 2.55056C1.62475 3.4487 1.17141 4.69021 1.17141 6.04654C1.17141 7.47762 1.70013 8.75751 2.88558 10.1964C4.03114 11.587 5.73494 13.0477 7.70771 14.739L7.70888 14.74L7.71254 14.7431C8.40239 15.3345 9.1844 16.005 9.9983 16.721C10.8171 16.0037 11.6003 15.3321 12.2915 14.7397C12.2933 14.7382 12.2951 14.7367 12.2969 14.7351C14.2677 13.0454 15.9698 11.586 17.1145 10.1964C18.2998 8.75751 18.8285 7.47762 18.8285 6.04654C18.8285 4.69021 18.3752 3.4487 17.5522 2.55056C16.7413 1.66579 15.6263 1.17858 14.413 1.17858C13.524 1.17858 12.7078 1.46286 11.9871 2.02344C11.3449 2.52324 10.8975 3.15505 10.6352 3.59713C10.5003 3.82446 10.2629 3.96016 9.99998 3.96016C9.73707 3.96016 9.49964 3.82446 9.36476 3.59713C9.10261 3.15505 8.65523 2.52324 8.01283 2.02344C7.29216 1.46286 6.47597 1.17858 5.58715 1.17858Z"
              fill="#2D2942"
            />
            <path
              className="fill"
              d="M5.58715 1.17858C4.37362 1.17858 3.25881 1.66579 2.44781 2.55056C1.62475 3.4487 1.17141 4.69021 1.17141 6.04654C1.17141 7.47762 1.70013 8.75751 2.88558 10.1964C4.03114 11.587 5.73494 13.0477 7.70771 14.739L7.70888 14.74L7.71254 14.7431C8.40239 15.3345 9.1844 16.005 9.9983 16.721C10.8171 16.0037 11.6003 15.3321 12.2915 14.7397L12.2969 14.7351C14.2677 13.0454 15.9698 11.586 17.1145 10.1964C18.2998 8.75751 18.8285 7.47762 18.8285 6.04654C18.8285 4.69021 18.3752 3.4487 17.5522 2.55056C16.7413 1.66579 15.6263 1.17858 14.413 1.17858C13.524 1.17858 12.7078 1.46286 11.9871 2.02344C11.3449 2.52324 10.8975 3.15505 10.6352 3.59713C10.5003 3.82446 10.2629 3.96016 9.99998 3.96016C9.73707 3.96016 9.49964 3.82446 9.36476 3.59713C9.10261 3.15505 8.65523 2.52324 8.01283 2.02344C7.29216 1.46286 6.47597 1.17858 5.58715 1.17858Z"
              fill="none"
            />
          </svg>
        </button>
        <button
          className="add-cart"
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
            onClickPlus();
          }}
        >
          <img width={18} height={18} src={addCartNewIcon} alt="add cart" />
        </button>
      </div>
    </Link>
  );
};

export default NewItem;
