import { User } from '../shared/types';

interface NavbarProps {
  user: User;
}

const Navbar: React.FC<NavbarProps> = ({ user }) => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar-content">
          <div className="navbar-title">Edvora</div>
          <div className="user">
            <div className="user-name">{user.name}</div>
            <div className="user-img">
              <img src={user.url} alt="user profile" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
