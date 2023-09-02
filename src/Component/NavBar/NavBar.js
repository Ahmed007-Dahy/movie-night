import Logo from './Logo/Logo';

function NavBar(props) {
    return (
        <div className="flex justify-between flex-col px-5 py-6 bg-secondary-color lg:flex-row lg:items-center">
            <Logo />
            {props.children}
        </div>
    );
}

export default NavBar;
