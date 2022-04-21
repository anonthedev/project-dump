import "./Header.css";

import { useState, useEffect } from "react";

import { auth, provider, signInWithPopup } from "../firebase";

import { useDispatch, useSelector } from "react-redux";

import { Link, Outlet } from "react-router-dom";

import {
  selectUserName,
  selectUserPhoto,
  setSignOutState,
  setUserLoginDetails,
} from "../features/userSlice";

function Header() {
  const dispatch = useDispatch();
  const username = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  const [ShowSignOut, setShowSignOut] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, [username]);

  const handleAuth = () => {
    if (!username) {
      signInWithPopup(auth, provider).then((result) => {
        setUser(result.user);
      });
    } else if (username) {
      auth.signOut().then(() => {
        dispatch(setSignOutState());
      });
    }
  };

  function setUser(user) {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  }

  function ChangeShowSignOut() {
    setShowSignOut(!ShowSignOut);
  }

  return (
    <header className="header">
      <section className="header-top">
        <div className="header-title">
          <Link to="/">
            <h1 className="gradient">project dump.</h1>
          </Link>
        </div>
        <div className="sign-in-btn">
          {!username ? (
            <button onClick={handleAuth}> Sign In</button>
          ) : (
            <div className="header-right">
              <div className="header-lib">
                <Link to="/lib">
                  <h3>My Projects</h3>
                </Link>
              </div>
              <div className="img-sign-out">
                <img
                  className="pfp"
                  src={userPhoto}
                  alt={username}
                  onClick={ChangeShowSignOut}
                />
                <span
                  id="sign-out"
                  className={
                    !ShowSignOut ? "sign-out-hidden" : "sign-out-visible"
                  }
                  onClick={handleAuth}
                >
                  Sign Out
                </span>
              </div>
            </div>
          )}
        </div>
      </section>
      <Outlet />
    </header>
  );
}

export default Header;
