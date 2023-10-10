import * as util from './util';

export function Ans(){
  return(
    <div className='sec2'>
      <util.Collapsable name='Answers'>
        <util.Collapsable name='Answer One'>
          <AnsZero />
        </util.Collapsable>
        <util.Collapsable name='Answer Two'>
          <AnsOne />
        </util.Collapsable>
        <util.Collapsable name='Answer Three'>
          <AnsThree />
        </util.Collapsable>
        <util.Collapsable name='Answer Four'>
          <AnsFour />
        </util.Collapsable>
        <util.Collapsable name='Answer Five'>
          <AnsFive />
        </util.Collapsable>
        <util.Collapsable name='Answer Six'>
          <AnsSix />
        </util.Collapsable>
      </util.Collapsable>
    </div>
  )
}


export default function StRleg(){
  return(
    <util.Image name='/streligban.jpeg'>
      <h1 id='strelgbantxt'>
        State and Religion in Afro-Eurasia
      </h1>
    </util.Image>
  )
}

export function AnsZero(){
  return(
    <div id='ctn7'>
      <util.Member>
        <h4>
          How does the author describe states and religion <br />
          in the Islamic world?
        </h4>
      </util.Member>
      <util.Member>
        <p className='text'>
          According to the author, the state and religion of Islam <br />
          is practically the same. The head of the Islamic caliphate is <br />
          the religious leader and vice versa.
        </p>
      </util.Member>
    </div>
  )
}

export function AnsOne(){
  return(
    <div id='ctn8'>
      <util.Member>
        <h4>
          How were Buddhism and Hinduism different?
        </h4>
      </util.Member>
      <util.Member>
        <p className='text'>
          The difference between Buddhism and Hinduism is that <br />
          Buddhism was more personal and worshipped no god; it was more like <br />
          a set of moral principles. On the other hand, Hinduism is a <br />
          polytheistic religion that believes in powerfull preistly classes.
        </p>
      </util.Member>
    </div>
  )
}

export function AnsThree(){
  return(
     <div id='ctn9'>
       <util.Member>
         <h4>
          Why did Buddhism and Daoism often prove troublesome for the Chinese state? <br />
          What did the Song dynasty promote instead and why?
         </h4>
       </util.Member>
       <util.Member>
         <p className='text'>
           The reason that Buddhism and Daoism proved an issue for the Chinese<br />
           is because neither emphansized obedience to the state. The Song dynasty <br />
           instead promoting Confucianism, a practice where it emphansized social <br />
           relationships, specifically ones between ruler and subject. 
         </p>
       </util.Member>
     </div>
  )
}

export function AnsFour(){
  return(
    <div id='ctn10'>
      <util.Member>
        <h4>
          What are some ways that rulers and religious leaders cooperated and clashed<br />
          in Christian Europe?
        </h4>
      </util.Member>
      <util.Member>
        <p className='text'>
          Some of the ways that Christian leaders in Europe collaborated and clashed where<br />
          cooperating the crusades and raising armies to fight against each other, even in territory<br />
          that wasn't controlled by the leaders.
        </p>
      </util.Member>
    </div>
  )
}

export function AnsFive(){
  return(
    <div id='ctn11'>
      <util.Member>
        <h4>
          The Mongol Empire conquered people of many different religions across Eurasia? How did the Mongol<br />
          state treat these conquered peoples?
        </h4>
      </util.Member>
      <util.Member>
        <p className='text'>
          When the Mongol Empire took over the lands of different people, their religious lives<br />
          didn't really change. The Mongols also defended religious minorites, encouraged debate<br />
          and exchange in court, and sponsored the building of multiple temples and churches of <br />
          different beliefs.
        </p>
      </util.Member>
    </div>
  )
}

export function AnsSix(){
  return(
    <div id='ctn12'>
      <util.Member>
        <h4>
          What are some pros and some cons of having religion intertwined with the state/government?
        </h4>
      </util.Member>
      <util.Member>
        <p className='text'>
          Some of the pros of having religion and state in intertwined is that you are guarenteed certain<br />
          rights that people that don't follow the same religon. Some of the cons, however are if you not part<br />
          of the state you could get persecuted or basic rights taken away from you.
        </p>
      </util.Member>
    </div>
  )
}
