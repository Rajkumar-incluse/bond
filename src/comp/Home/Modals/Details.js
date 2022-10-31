import Modal, { ModalHeader } from '../../UIComp/Modal';

function Input({ lable = "", value = "" }) {
  return (
    <div className='df'>
      <lable className="w-28 font-medium shrink-0">{lable}</lable>
      <span className="font-medium">:</span>
      <input
        disabled
        type="text"
        defaultValue={value}
        className="md:max-w-[180px] ml-4"
      />
    </div>
  )
}

function Details({ isOpen, data, closeModal }) {
  return (
    <Modal
      isOpen={isOpen}
      closeModal={closeModal}
      contentCls="xs:min-w-[400px]"
    >
      <ModalHeader
        title='Bond Details'
        closeModal={closeModal}
      />

      <div className='grid md:grid-cols-2 gap-4'>
        <Input
          lable='Security Code'
          value={data.securityCode}
        />
        <Input
          lable='Issuer Name'
          value={data.issuerName}
        />
        <Input
          lable='Coupon Rate'
          value={data.couponRate}
        />
        <Input
          lable='Price'
          value={data.askPrice}
        />
        <Input
          lable='Maturity Date'
          value={data.maturityDate}
        />
        <Input
          lable='Yield'
          value={data.yield}
        />
        <Input
          lable='Currency'
          value="Rupee"
        />
      </div>

      <select className='my-4'>
        <option value="">Bond Details</option>
      </select>

      <select className='mb-4' disabled>
        <option value="">Price Details</option>
      </select>

      <div className='df justify-center flex-wrap gap-8 max-w-md mt-6 mx-auto'>
        <button className='flex-auto rounded-md text-white bg-emerald-400 hover:bg-emerald-700'>
          Buy
        </button>
        <button className='flex-auto rounded-md text-white bg-teal-500 hover:bg-teal-800'>
          Sell
        </button>
      </div>
    </Modal>
  )
}

export default Details