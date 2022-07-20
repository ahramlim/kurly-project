import React from "react";
import { Link } from "react-router-dom";
const HeaderMenuCategory = () => {
  const CATEGORY = ["신상품", "베스트", "알뜰쇼핑", "특가/혜택"];

  return (
    <>
      {CATEGORY.map((category, index) => {
        return (
          <li key={index}>
            <Link to="#">
              <span>{category}</span>
            </Link>
          </li>
        )
      })}
    </>
  )
}

export default HeaderMenuCategory;