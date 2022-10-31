import Modal, { ModalHeader } from '../../UIComp/Modal';
import live from "../../../constants/live";

function Tokenise({ isOpen, closeModal }) {
  return (
    <Modal
      isOpen={isOpen}
      closeModal={closeModal}
      contentCls="dfc w-[90vw] h-[90vh]"
    >
      <ModalHeader
        title='Tokenize your bond'
        closeModal={closeModal}
      />

      <div className='scroll-y grid grid-cols-[1fr_300px] gap-4 overflow-hidden'>
        <div className='overflow-auto border'>
          <table className="w-full table-fixed">
            <thead>
              <tr className="sticky top-0 text-sm font-medium bg-white z-1 shadow">
                <td className="w-36 px-4 py-2">Security Code</td>
                <td className="w-52 px-4 py-2">Issuer Name</td>
                <td className="w-32 px-4 py-2">Coupon Rate</td>
                <td className="w-28 px-4 py-2">Face Value</td>
                <td className="w-24 px-4 py-2">LTP</td>
                <td className="w-80 px-4 py-2">Credit Rating</td>
                <td className="w-32 px-4 py-2 text-center">Maturity Date</td>
                <td className="w-28 px-4 py-2 text-center">Bid Price</td>
                <td className="w-28 px-4 py-2 text-center">Ask Price</td>
              </tr>
            </thead>

            <tbody>
              {
                live.map(li => (
                  <tr
                    key={li.id}
                    className="hover:bg-slate-100 border-b cursor-pointer group"
                  >
                    <td className="px-4 py-2 text-sm opacity-80 group-hover:opacity-100"> {li.securityCode} </td>
                    <td className="px-4 py-2 text-sm font-medium opacity-80 group-hover:opacity-100"> {li.issuerName} </td>
                    <td className="px-4 py-2 text-sm opacity-80 group-hover:opacity-100"> {li.couponRate} </td>
                    <td className="px-4 py-2 text-sm opacity-80 group-hover:opacity-100"> {li.faceValue} </td>
                    <td className="px-4 py-2 text-sm opacity-80 group-hover:opacity-100"> {li.ltp} </td>
                    <td className="px-4 py-2 text-xs opacity-80 group-hover:opacity-100"> {li.creditRating} </td>
                    <td className="px-4 py-2 text-sm opacity-80 group-hover:opacity-100 text-center"> {li.maturityDate} </td>
                    <td className="px-4 py-2 text-sm opacity-80 group-hover:opacity-100 text-center">
                      <button className="w-20 px-3 py-1.5 rounded border border-emerald-600">
                        {li.bidPrice}
                      </button>
                    </td>
                    <td className="px-4 py-2 text-sm opacity-80 group-hover:opacity-100 text-center">
                      <button className="w-20 px-3 py-1.5 rounded border border-yellow-600">
                        {li.askPrice}
                      </button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>

        <div className=''>
          <h2 className='mb-4 text-xl font-medium text-center'>Tokenize into</h2>

          <label className='mb-1 font-medium' htmlFor="">Number of Tokens</label>
          <input className='mb-6' type="text" />

          <label className='mb-1 font-medium' htmlFor="">Token value</label>
          <input type="text" />

          <span className='block mt-1 mb-6 text-xs text-gray-500'>Note: Minimum value is Rs.1000</span>

          <button className='block w-4/5 mx-auto text-white bg-emerald-400 hover:bg-emerald-700 rounded-md'>
            Submit
          </button>
        </div>
      </div>
    </Modal>
  )
}

export default Tokenise