import Logo from './Logo/Logo';

function NavBar(props) {
    return (
        <div className="flex items-center justify-between px-5 py-6 bg-secondary-color">
            <Logo />
            {props.children}
        </div>
    );
}

export default NavBar;
