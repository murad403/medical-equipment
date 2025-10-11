
const TransactionModal = () => {
    return (
        <div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box bg-white text-title border-2 border-hard">
                    <form method="dialog">
                        <button className="absolute right-0 top-0 text-white bg-red-500 px-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg md:text-xl text-center">Transaction Details</h3>
                    <div className="*:flex *:justify-between *:items-center *:py-3 *:border-b *:border-hard mt-3 md:mt-5">
                        <div>
                            <h3 className="text-lg">Transaction ID:</h3>
                            <p>#94585948</p>
                        </div>
                        <div>
                            <h3 className="text-lg">Type:</h3>
                            <p>#94585948</p>
                        </div>
                        <div>
                            <h3 className="text-lg">User Name:</h3>
                            <p>#94585948</p>
                        </div>
                        <div>
                            <h3 className="text-lg">Address:</h3>
                            <p>#94585948</p>
                        </div>
                        <div>
                            <h3 className="text-lg">Date:</h3>
                            <p>#94585948</p>
                        </div>
                        <div>
                            <h3 className="text-lg">Price:</h3>
                            <p>#94585948</p>
                        </div>
                        <div>
                            <h3 className="text-lg">Amount with 10% paid:</h3>
                            <p>#94585948</p>
                        </div>
                    </div>
                </div>
            </dialog>
        </div>
    )
}

export default TransactionModal;