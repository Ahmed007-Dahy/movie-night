function Main(props) {
    return (
        <main className="grid grid-cols-1 grid-rows-2 gap-10 px-10 h-screen overflow-hidden lg:grid-cols-2 lg:grid-rows-1 lg:gap-5">
            {props.children}
        </main>
    );
}

export default Main;
