import { FC } from "react"

interface Props { // Creo una interfaz para agregar reglas de tipado
  children?: JSX.Element | JSX.Element[]; // Indico que children será de tipo JSX.Element
}  

export const DarkLayout: FC<Props> = ({children}) => { // Aplico las reglas de la interfaz
  return (
    <div style={{
      backgroundColor: 'rgba(0,0,0,0.3)',
      borderRadius: '10px',
      padding: '10px',
    }}>
      <h3>Dark Layout</h3>
      <div>
        {children}
      </div>
    </div>
  )
}
