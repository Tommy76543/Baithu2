import { memo } from "react";
import "./signstyle.css";

const Froms = () => {
  return (
    <div className="auth-container">
      
      <div className="form-wrapper">
        {/* Log In Form */}
        <div className="form-box">
          <h2>Log In</h2>
          <form>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Enter your email" required />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" placeholder="Enter your password" required />
            </div>
            <button type="submit" className="btn">Log In</button>
            <a href="#" className="forgot-password">
              Forgot your password?
            </a>
          </form>
        </div>

        {/* Divider */}
        <div className="divider"></div>

        {/* Create an Account Form */}
        <div className="form-box">
          <h2>Create an Account</h2>
          <form>
            <div className="form-group">
              <label>Username</label>
              <input  type="text" placeholder="Enter your username" required />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Enter your email" required />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="form-group">
              <label>Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm your password"
                required
              />
            </div>
            <div className="form-group">
              <input type="checkbox" id="email-signup" />
              <label htmlFor="email-signup">Sign up for our email list</label>
            </div>
            <button type="submit" className="btn">Create an Account</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default memo(Froms);
