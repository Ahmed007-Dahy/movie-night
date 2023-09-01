function ErrorMessage({ message }) {
    return (
        <div>
            <p className={'text-white text-2xl text-center mt-16'}>
                <span>⛔</span> {message}
            </p>
        </div>
    );
}

export default ErrorMessage;
