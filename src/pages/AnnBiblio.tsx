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
        <div id ='ctn14'>
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
        </div>
       </util.Collapsable> 
    )
}

export const BibThree = () =>{
    return(
        <util.Collapsable name='Source #3'>
            <div id='ctn15'>
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
            </div>
        </util.Collapsable>
    )
}

export const BibFour = () =>{
    return(
        <util.Collapsable name='Source #4'>
            <div id='ctn16'>
            <util.Member>
                <h4 className='hangInd'>Onon, Urgunge. The Secret History of the Mongols: The Life and Times of Chinggis Khan. <br />
                    Translated, edited and with an introduction by Urgunge Onon. Richmond, Surrey: <br />
                    Curzon, 2001.
                </h4>
            </util.Member>
            <util.Member>
                <p>
                    This source explains the strategies behind the expansion of the Mongol Empire. <br />
                    The author explains that they'd take over an area quicly without pillaging, then<br/>
                    they'd excecute or enslave the soldiers of the territory.
                </p>
            </util.Member>
            </div>
        </util.Collapsable>
    )
}

export const BibFive = () =>{
    return(
        <util.Collapsable name='Source #5'>
            <div id='ctn17'>
            <util.Member>
                <h4 className='hangInd'>
                    NMcCullough, David Willis, ed. Chronicles of the Barbarians: Firsthand Accounts of Pillage and Conquest<br/>
                    from the Ancient World to the Fall of Constantinople. New York: Times Books, 1998.
                </h4>
            </util.Member>
            <util.Member>
                <p>
                    This source discribes the daily life of the people living in the Mongol Empire. The author talks about <br />
                    how they trained, used religion, and made the women do all of the jobs.
                </p>
            </util.Member>
            </div>
        </util.Collapsable>
    )
}

export const BibSix = () =>{
    return(
        <util.Collapsable name='Source #6'>
            <div id='ctn18'>
            <util.Member>
                <h4 className='hangInd'>
                    Levi, Scott Cameron, and Ron Sela, eds. Islamic Central Asia: An Anthology of Historical Sources. Bloomington:<br/>
                    Indiana University Press, 2010.
                </h4>
            </util.Member>
            <util.Member>
                <p>
                    This source tells the story of how the Mongol empire came to be. This tells us that there were seven seperate<br/>
                    kingdoms that were around the same place, but then Ginggis Khan came in and unified the kingdoms. He believed<br/>
                    that he was given a vision from God.
                </p>
            </util.Member>
            </div>
        </util.Collapsable>
    )
}

export const BibSev = () => {
    return(
        <util.Collapsable name='Source #7'>
            <div id='ctn19'>
                <util.Member>
                    <h4 className='hangInd'>
                        Levi, Scott Cameron, and Ron Sela, eds. Islamic Central Asia: An Anthology of Historical Sources. Bloomington:<br />
                        Indiana University Press, 2010. 
                    </h4>
                </util.Member>
                <util.Member>
                    <p>
                        This source tells us about the trade and diversity of the capital city of the Mongol Empire. The author tells us<br/>
                        about the main road of the city, with all of its stalls and shops. He also talks about how diverse the capital<br/>
                        was.
                    </p>
                </util.Member>
            </div>
        </util.Collapsable>
    )
}

export const WholeSec = () =>{
    return(
        <div className='sections'>
        <util.Collapsable name='Annotated Bibliography'>
            <BibOne/>
            <BibTwo />
            <BibThree />
            <BibFour />
            <BibFive />
            <BibSix />
            <BibSev />
        </util.Collapsable>
        </div>
    )
}