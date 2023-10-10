import * as util from './util';
import './App.css';


export default function AnnBiblio(){
  return(
    <Image name='/abbibliohdr.jpeg'>
      <h1 id='anbiblohdrtxt'>Annotated Bibliography -- Mongol Empire</h1>
    </Image>
  )
} 

export const BibOne = () => {
  return(
    <util.Collapsable name='Source #1'>
      <div className='ctncld'>
        <h4></h4>
      </div>
    </util.Collapsable>
  )
}

