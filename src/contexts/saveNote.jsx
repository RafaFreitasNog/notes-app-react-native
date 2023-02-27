import React, { createContext, useState } from 'react';

const SaveNoteContext = createContext();

function SaveNoteProvider({ children }) {

  const [saved, setSaved] = useState(true)

  function setSavedFalse() {
    setSaved(false)
  }

  return (
    <SaveNoteContext.Provider value={{ saved, setSavedFalse }} >
      {children}
    </SaveNoteContext.Provider>
  )
}

export {SaveNoteContext, SaveNoteProvider}