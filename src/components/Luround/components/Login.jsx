/** @format */
import luround from "../elements/LUROUND1.png";
import { Link } from "react-router-dom";
import "../style.css";
export default function Login() {
  function sideBar() {
    const dropdownButton = document.querySelector(".list-menu");
    const sidebar = document.querySelector(".side-bar");

    if (dropdownButton) {
      sidebar.style.right = "0";
      sidebar.classList.add("active");
      sidebar.classList.remove("fade-out");
    }
  }

  function onClose() {
    const closeSidebarButton = document.querySelector(".dropdown-close");
    const sidebar = document.querySelector(".side-bar");
    if (closeSidebarButton) {
      sidebar.style.right = "-500px";
      sidebar.classList.add("fade-out");
    }
  }
  return (
    <div className='imagelist'>
      <Link to='/'>
        <img className='luround' src={luround} alt='Luround Logo' />
      </Link>

      <ul className='ullist'>
        <li className='list'>
          <button className='login'>Log In</button>
        </li>
        <li className='list'>
          <a href='https://play.google.com/store/apps/details?id=com.luround.uppist&pcampaignid=web_share'>
            <button className='getapp'>Get the app</button>
          </a>
        </li>

        <li className='list-menu' onClick={sideBar}>
          <a className='dropdown-btn'>
            <svg
              width='25'
              height='24'
              viewBox='0 0 25 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M3.51709 6C3.51709 5.73478 3.62245 5.48043 3.80998 5.29289C3.99752 5.10536 4.25187 5 4.51709 5H20.5171C20.7823 5 21.0367 5.10536 21.2242 5.29289C21.4117 5.48043 21.5171 5.73478 21.5171 6C21.5171 6.26522 21.4117 6.51957 21.2242 6.70711C21.0367 6.89464 20.7823 7 20.5171 7H4.51709C4.25187 7 3.99752 6.89464 3.80998 6.70711C3.62245 6.51957 3.51709 6.26522 3.51709 6ZM3.51709 12C3.51709 11.7348 3.62245 11.4804 3.80998 11.2929C3.99752 11.1054 4.25187 11 4.51709 11H20.5171C20.7823 11 21.0367 11.1054 21.2242 11.2929C21.4117 11.4804 21.5171 11.7348 21.5171 12C21.5171 12.2652 21.4117 12.5196 21.2242 12.7071C21.0367 12.8946 20.7823 13 20.5171 13H4.51709C4.25187 13 3.99752 12.8946 3.80998 12.7071C3.62245 12.5196 3.51709 12.2652 3.51709 12ZM4.51709 17C4.25187 17 3.99752 17.1054 3.80998 17.2929C3.62245 17.4804 3.51709 17.7348 3.51709 18C3.51709 18.2652 3.62245 18.5196 3.80998 18.7071C3.99752 18.8946 4.25187 19 4.51709 19H20.5171C20.7823 19 21.0367 18.8946 21.2242 18.7071C21.4117 18.5196 21.5171 18.2652 21.5171 18C21.5171 17.7348 21.4117 17.4804 21.2242 17.2929C21.0367 17.1054 20.7823 17 20.5171 17H4.51709Z'
                fill='#1D2E2E'
              />
            </svg>
          </a>
        </li>
      </ul>

      <div className='side-bar' id='side-bar'>
        <div className='image-close'>
          <img className='image-luround' src={luround} />

          <a className='dropdown-close' id='sidebar-close' onClick={onClose}>
            <svg
              className='cancel'
              width='25'
              height='24'
              viewBox='0 0 25 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M7.2749 17.243L12.5179 12L17.7609 17.243M17.7609 6.757L12.5169 12L7.2749 6.757'
                stroke='#1D2E2E'
                strokeWidth='1.8'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </a>
        </div>

        <ul className='sidebar-menu'>
          <li>
            <button className='sidebar-login'>Log In</button>
          </li>
          <li>
            <a href='https://play.google.com/store/search?q=luround&c=apps&hl=en'>
              <button className='sidebar-getapp'>Get the app</button>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
