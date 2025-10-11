"use client";

const Withdraw = () => {
    return (
        <div className='flex justify-between items-center w-full text-title'>
            <h2 className="font-semibold md:text-2xl text-xl">Dashboard</h2>
            <div>
              <button className='bg-hard cursor-pointer text-white py-2 md:px-7 px-4 rounded-xl' onClick={()=>(document.getElementById('my_modal_2') as HTMLDialogElement).showModal()}>$Withdraw</button>
            <div>
                <dialog id="my_modal_2" className="modal">
                    <div className="modal-box bg-white">
                      <h3 className="font-bold text-lg">Withdraw Your Earnings</h3>
                      <div className="text-[16px] space-y-2 mt-5">
                        <p>Withdrawal Balance</p>
                        <p className="bg-normal py-4 px-5 rounded-xl">$900</p>
                      </div>
                      <div className="flex items-center gap-5">
                        <div className="text-[16px] w-full space-y-2 mt-5">
                        <p>Main Balance</p>
                        <p className="bg-normal py-4 px-5 rounded-xl">$1000</p>
                      </div>
                      <div className="text-[16px] w-full space-y-2 mt-5">
                        <p>Available Balance</p>
                        <p className="bg-normal py-4 px-5 rounded-xl">$100</p>
                      </div>
                      </div>
                      <div className="*:rounded-3xl *:cursor-pointer flex justify-end items-center *:py-2 *:px-5 gap-3 mt-5 modal-action">
                        <form method="dialog" className="text-hard border border-hard">
                            <button className="cursor-pointer">Cancel</button>
                        </form>
                        <button className="text-white bg-hard">Process</button>
                      </div>
                    </div>
                    <form method="dialog" className="modal-backdrop">
                      <button>close</button>
                    </form>
                </dialog>
            </div>
            </div>
        </div>
    );
};

export default Withdraw;