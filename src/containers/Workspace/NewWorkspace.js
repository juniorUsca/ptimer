const NewWorkspace = ({ name, picture, dispatch }) => {
  const handleChange = key => ev => {
    dispatch({
      type: 'set',
      payload: {
        key,
        value: ev.currentTarget.value,
      },
    })
  }
  return (
    <div className="grid grid-cols-2 gap-6">
      <div className="col-span-2">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 leading-5">
          Nombre
          {name}
          <input value={name} onChange={handleChange('name')} type="text" id="name" className="block w-full px-3 py-2 mt-1 border border-gray-500 rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
        </label>
      </div>
      <div className="col-span-2">
        <label htmlFor="picture" className="block text-sm font-medium text-gray-700 leading-5">
          Imagen Url
          <input value={picture} onChange={handleChange('picture')} type="text" id="picture" className="block w-full px-3 py-2 mt-1 border border-gray-500 rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
        </label>
      </div>
    </div>
  )
}

export default NewWorkspace
