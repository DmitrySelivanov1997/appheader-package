const packageJson = require("./package.json");
const Header = () => (
 <header className="header">I'm blue header of version: {packageJson.version}</header>
);
export default Header;