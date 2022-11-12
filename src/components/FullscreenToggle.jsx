import { useMemo } from 'react'
import useToggleFullscreen from 'hooks/useToggleFullscreen'
import { classNames } from 'utils'

export default ({ appRef }) => {
  const toggleFullscreen = useToggleFullscreen(appRef)
  const fullscreenEnabled = document.fullscreenEnabled

  return (
    <button
      className={classNames(
        'text-3xl scale-100 hover:scale-110 active:scale-125 transition',
        fullscreenEnabled ? 'block' : 'hidden'
      )}
      onClick={toggleFullscreen}
    >
      <span>[ ]</span>
    </button>
  )
}
