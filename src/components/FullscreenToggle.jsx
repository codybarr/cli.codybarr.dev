import useToggleFullscreen from 'hooks/useToggleFullscreen'

export default ({ appRef }) => {
  const toggleFullscreen = useToggleFullscreen(appRef)

  return (
    <button
      className="text-3xl scale-100 hover:scale-110 active:scale-125 transition"
      onClick={toggleFullscreen}
    >
      <span>[ ]</span>
    </button>
  )
}
