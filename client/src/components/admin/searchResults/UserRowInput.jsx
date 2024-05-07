import { useState } from 'react'
import EditAvatarModal from '../../profile/avatar/EditAvatarModal'

const UserRowInput = ({
  value,
  textareaMaxWidth,
  field,
  handleFieldEdit,
  isImage,
}) => {
  const [modalOpen, setModalOpen] = useState(false)

  const handleModalClose = () => {
    setModalOpen(false)
  }

  const valueType = typeof value
  if (isImage) {
    return (
      <>
        <button
          className="border-gray-500 bg-white rounded border-[1px] text-xs px-2 py-[2px] hover:ring-gray-300 hover:ring-4"
          onClick={() => setModalOpen(true)}
        >
          Upload New
        </button>
        {modalOpen && <EditAvatarModal handleModalClose={handleModalClose} />}
      </>
    )
  }

  if (valueType === 'string') {
    return (
      <textarea
        className="border-gray-300 max-h-fit px-[2px] resize focus:outline-primary "
        style={{ maxWidth: `${textareaMaxWidth}px` }}
        // {...register(field)}
        name={field}
        value={value}
        onChange={handleFieldEdit}
        rows="1"
      />
    )
  }

  if (valueType === 'boolean') {
    return (
      <select
        name={field}
        className="select select-bordered rounded border-[1px] border-gray-300 focus:border-transparent focus:ring-[2px] focus:ring-primary w-fit min-h-fit h-fit text-xs"
        // {...register(field, { setValueAs: value => value === 'true' })}
        value={value}
        onChange={handleFieldEdit}
      >
        <option value={true}>True</option>
        <option value={false}>False</option>
      </select>
    )
  }
  return <></>
}

export default UserRowInput
