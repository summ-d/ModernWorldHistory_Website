import { Image, Member, Collapsable } from './util';
import './App.css';

export function Awnsers() {
  return (
    <div className='sections'>
      <Collapsable name='Answers'>
        <Collapsable name='Answer One'>
          <AwnserOne />
        </Collapsable>
        <Collapsable name='Answer Two'>
          <AwnserTwo />
        </Collapsable>
        <Collapsable name='Answer Three'>
          <AwnserThree />
        </Collapsable>
        <Collapsable name='Answer Four'>
          <AwnserFour />
        </Collapsable>
        <Collapsable name='Answer Five'>
          <AwnserFive />
        </Collapsable>
        <Collapsable name='Answer Six'>
          <AwnserSix />
        </Collapsable>
        <Collapsable name='Answer Seven'>
          <AwnserSeven />
        </Collapsable>
      </Collapsable>
    </div>
  )
}

export default function CommAfAs() {
  return (
    <Image name='/afeurathsnd.jpeg'>
      <h1 id='afasbntxt'>Communities in Afro-Eurasia</h1>
    </Image>
  )
}

export function AwnserOne() {
  return (
    <div id='ctn0'>
      <div className='ctncld'>
        <h4>According to the author, why do we need rules <br />
          and institutions to organize <br />
          large groups of people?</h4>
      </div>
      <div className='ctncld'>
        <p className='text'>
          According to the author, the reason why we need rules and institutions <br />
          to organize large groups of people is because we want to be assured <br />
          that the other people in the community can be trusted and that they are <br />
          doing their fair share of work.
        </p>
      </div>
    </div>
  )
}

export function AwnserTwo() {
  return (
    <div id='ctn1'>
      <Member>
        <h4>
          How does the author define a state?
        </h4>
      </Member>
      <Member>
        <p className='text'>
          The author defines a state as an: "organized community <br />
          living under a unified pollitical system."
        </p>
      </Member>
    </div>
  )
}


export function AwnserThree() {

  return (
    <div className='ctn2'>
      <Member>
        <h4 className='text'>
          During this period in Afro-Eurasia, where were most of the large states located? <br />
          Use geographical features to describe where they were located.
        </h4>
      </Member>
      <Member>
        <p className='text'>
          At this period in time, most large states in Afro-Eurasia were either at the coast of <br />
          the Metiteranian Sea or what is now present-day China. The reason why they were there <br />
          was because in their region, the only stable places for life were around those places. <br />
          Before the avent of modern disrobution systems, the only way to get resources was locally <br />
          and in this case, the only places that were around that were resource-rich were those places.
        </p>
      </Member>
    </div>
  )
}

export function AwnserFour() {
  return (
    <div className='ctn3'>
      <Member>
        <h4>
          What is Dar al-Islam, and what was its <br />
          significance during this period?
        </h4>
      </Member>
      <Member>
        <p className='text'>
          Dar al-Islam was the place that Islam was the most concentrated at. <br />
          At the heart of it was the Abbasid Caliphate, and its headquarters in <br />
          Bagdahd. This place was significant because it was the center for learning <br />
          and also the center for the training of the next generation of government leaders <br />
          of the caliphate.
        </p>
      </Member>
    </div>
  )
}

export function AwnserFive() {
  return (
    <div className='ctn4'>
      <Member>
        <h4>
          What was the largest and most sophisticated state at the start of this <br />
          era? What strategies made this state so powerful?
        </h4>
      </Member>
      <Member>
        <p className='text'>
          The largest and most sophisticted state at the start of the era was the Song Dynasty<br />
          The two strategies that they used to keep the state powerful was beuracracy and a balance<br />
          between trade and agriculture.
        </p>
      </Member>
    </div>
  )
}

export function AwnserSix() {
  return (
    <div className='ctn5'>
      <Member>
        <h4>
          What innovations did the Mongol Empire produce? How did the empire shape <br />
          the future of Eurasia?
        </h4>
      </Member>
      <Member>
        <p className='text'>
          Some innovations made by the Mongol Empire include: vast road systems,<br />
          new ways of diplomacy, and new ways of using money. These impacted the <br />
          future of Eurasia by influencing many nations to adopt their ideas.
        </p>
      </Member>
    </div>
  )
}

export function AwnserSeven() {
  return (
    <div className='ctn6'>
      <Member>
        <h4>
          The author mentions that most states in Afro-Eurasia clustered along <br />
          a belt of land. Thinking about the three frames of this course, <br />
          what are some possible explanations you can come up with to <br />
          explain why large states formed in this belt?
        </h4>
      </Member>
      <Member>
        <p className='text'>
          Thinking about the three frames of the course in this context, <br />
          it's really a simple explaination why there is a belt of states that formed. <br />
          Some posible reasons coming from the three frames are: fertile land, water access, and other people. <br />
          the area, specifically around the Mediterranean Sea, the Mesopotamia Valley, and the South China Sea <br />
          is pretty fertile and provides an easy access to the early trading routes of civilization. <br />
          Other people were also there, which means that there is more reason to go there, due to the extra protection <br />
          and resources that are there.
        </p>
      </Member>
    </div>
  )
}