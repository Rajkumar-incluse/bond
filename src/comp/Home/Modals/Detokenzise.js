import Modal, { ModalHeader } from '../../UIComp/Modal';

function Detokenzise({ isOpen, data, closeModal }) {
  return (
    <Modal
      isOpen={isOpen}
      closeModal={closeModal}
      contentCls="dfc w-[350px]"
    >
      <ModalHeader
        title='Detokenize'
        closeModal={closeModal}
      />

      <h1 className='mb-4'>
        Detokenize {data.issuerName} back to underlying bond
      </h1>

      <button className='mx-auto px-8 py-2 rounded-md bg-red-400 text-white hover:bg-red-600'>
        Authorise
      </button>
    </Modal>
  )
}

export default Detokenzise