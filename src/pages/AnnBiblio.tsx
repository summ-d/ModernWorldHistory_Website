import * as util from './util'
import './App.css'

export default function AnnBiblio(){
    return(
        <util.Image name='/abbibliohdr.jpeg'>
            <h1 id='anbibtxth'>
                Annotated Bibliography -- Mongolians
            </h1>
        </util.Image>
    )
}

export const BibOne = () => {
    return(
        <util.Collapsable name='Source #1'>
            <div id='ctn13'>
                <util.Member>
                    <h4 className='hangInd'>
                    Al-Athir, Ibn. “On the Tatars.” The Complete History, <br />
                    Mosul, 1220. 
                    </h4>
                </util.Member>
                <util.Member>
                    <p>
                        This source is used because it tells about how they <br />
                        brutally took over land: by killing all that didn't agree <br />
                        with them. This source also tells us about their method of travel <br />
                        and their religion. They traveled using horses and they worshipped <br />
                        pagan gods. According to this source, they also will eat anything. 
                    </p>
                </util.Member>
            </div>
        </util.Collapsable>
    )
}

export const BibTwo = () =>{
    return(
       <util.Collapsable name='Source #2'>
        <util.Member>
            <h4 className='hangInd'>
                    Juvaini, Malik. History of the World Conqueror. 1260. 
            </h4>
        </util.Member>
        <util.Member>
            <p>
                This source mostly talks about the way Ghengis Khan governed<br />
                the Mongol Empire. This source talks about how Khan would murder<br />
                everyone that wasn't loyal to him when he conquered a new territory.<br/>
                This system world cause a population that was completely and totally<br/>
                loyal to the government. After that purge, they'd rebuild and act like<br/>
                nothing ever happened.
            </p>
        </util.Member>
       </util.Collapsable> 
    )
}

export const BibThree = () =>{
    return(
        <util.Collapsable name='Source #3'>
            <util.Member>
                <h4 className='hangInd'>
                    Polo, Marco. Travels. Venice, Italy. 1291. 
                </h4>
            </util.Member>
            <util.Member>
                <p>
                    This source explains the massive amount of security at the city of<br />
                    Kinsay. This source tells me that at every bridge, there were 10<br/>
                    guards to keep unwanted people out. There was also a dedicated<br />
                    force of men that enforced a no-burning rule outside of hours.<br />
                    This source also tells me that households were required to post<br />
                    the number of people in the households.
                </p>
            </util.Member>
        </util.Collapsable>
    )
}