import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <div>
        <p>Minjeong Kim / F / South Korea</p>
        <p>Software Engineer living in Ireland</p>
      </div>
      <br />
      <br />
      <div>
        <p>
          Site Work In Progress
        </p>
        <p>
          See More: <a href="https://www.youtube.com/playlist?list=PLfpv-skNLPCIkYqu88vDwn2eLcn0v2P1Y">https://www.youtube.com/playlist?list=PLfpv-skNLPCIkYqu88vDwn2eLcn0v2P1Y</a>
        </p>
        <br />
        <div>
          <Image
            src={`/imgs/wip.jpg`}
            width="500"
            height="300"
            alt="Work In Progress" />
        </div>
      </div>
    </div>
  );
}
