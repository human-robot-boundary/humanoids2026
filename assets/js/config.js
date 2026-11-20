const project_name = `Designing the Human-Robot Boundary: From Human Guidance to Robot Autonomy in Real-World Deployment`
const proj_small_caps = `<span class="small-caps"></span>`
const conference_details = ['Humanoids 2026', 'https://2026.ieee-humanoids.org/', 'Santa Clara Convention Center', 'assets/images/Humanoids-2026.webp', '']
const workshop_date = `December 7, 2026`

// Invited speakers to be announced
const talk_speaker_details = {
    'zeng':
    ['Andy Zeng',
     'assets/images/speakers/zeng.jpg',
     'Co-founder & Chief Scientist',
     'Generalist',
     'https://andyzeng.github.io/',
     '',
     '',
     ''],
    'gu':
    ['Shixiang Shane Gu',
     'assets/images/speakers/gu.jpg',
     'Senior Staff Research Scientist',
     'Google DeepMind',
     'https://sites.google.com/view/gugurus/',
     '',
     '',
     ''],
    'chen':
    ['Xiangyu Chen',
     'assets/images/speakers/chen.webp',
     'Founder & CEO',
     'IO-AI TECH',
     'https://io-ai.tech/en/about/#:~:text=Meet%20the%20founders-,Xiangyu%20Chen,-Founder%20%26%20CEO',
     '',
     '',
     ''],
    'zhou':
    ['Calvin Zhou',
     'assets/images/speakers/zhou.jpg',
     'Co-Founder',
     'RoboForce',
     'https://roboforce.ai/',
     '',
     '',
     ''],
    'morgenstein':
    ['Kyle Morgenstein',
     'assets/images/speakers/morgenstein.jpg',
     'RL Lead',
     'Apptronik',
     'https://www.kylemorgenstein.com/',
     '',
     '',
     ''],
    'liu':
    ['Huihan Liu',
     'assets/images/speakers/liu.jpg',
     '',
     'Amazon FAR',
     'https://huihanl.github.io/',
     '',
     '',
     ''],
}


const organizers_talk_details = {
    'yamazaki':
    ['Kashu Yamazaki',
     'assets/images/organizers/yamazaki.webp',
     'PhD Student',
     'Carnegie Mellon University',
     'https://kashu7100.github.io/',
     '',
     '',
     ''],
    'kawaharazuka':
    ['Kento Kawaharazuka',
     'assets/images/organizers/kawaharazuka.png',
     'Lecturer',
     'The University of Tokyo',
     'https://haraduka.github.io',
     '',
     '',
     ''],
    'obinata':
    ['Yoshiki Obinata',
     'assets/images/organizers/obinata.jpg',
     'Project Assistant Professor',
     'The University of Tokyo',
     'https://www.yoshikiobinata.com/',
     '',
     '',
     ''],
    'seo':
    ['Mingyo Seo',
     'assets/images/organizers/seo.png',
     'Assistant Professor',
     'University of Central Florida',
     'https://mingyoseo.com/',
     '',
     '',
     ''],
}

const organizers_details = [
  ['Yoshiki Obinata', 'assets/images/organizers/obinata.jpg', 'Project Assistant Professor', 'The University of Tokyo, Japan', 'https://www.yoshikiobinata.com/'],
  ['Kento Kawaharazuka', 'assets/images/organizers/kawaharazuka.png', 'Lecturer', 'The University of Tokyo, Japan', 'https://haraduka.github.io'],
  ['Mingyo Seo', 'assets/images/organizers/seo.png', 'Assistant Professor', 'University of Central Florida, USA', 'https://mingyoseo.com/'],
  ['Kashu Yamazaki', 'assets/images/organizers/yamazaki.webp', 'PhD Student', 'Carnegie Mellon University, USA', 'https://kashu7100.github.io/'],
  ['Marina Y. Aoyama', 'assets/images/organizers/aoyama.jpg', 'PhD Student', 'The University of Edinburgh, UK', 'https://sites.google.com/view/marinayaoyama/'],
]

const accepted_presentations = [
]

const org_affiliation_logos = [
]

// event-alias, time slot, event name, person alias from talk_speaker_details, ppt mode
// Last two fields apply to invited and organizer talks.
const schedule = [
  ['welcome', '9:00 – 9:10', 'Welcome talk'],
  ['inv-talk', '9:10 – 9:40', '', 'chen', ''],
  ['inv-talk', '9:40 – 10:10', '', 'zhou', ''],
  ['org-talk', '10:10 – 10:25', '', 'obinata', ''],
  ['coffee-break', '10:30 – 11:00', 'Poster / Demo Session 1 and Coffee break'],
  ['inv-talk', '11:10 – 11:40', '', 'liu', ''],
  ['inv-talk', '11:40 – 12:10', '', 'zeng', ''],
  ['org-talk', '12:10 – 12:25', '', 'kawaharazuka', ''],
  ['lunch-break', '12:30 – 13:30', 'Lunch'],
  ['inv-talk', '13:40 – 14:10', '', 'morgenstein', ''],
  ['inv-talk', '14:10 – 14:40', '', 'gu', ''],
  ['org-talk', '14:40 – 14:55', '', 'seo', ''],
  ['coffee-break', '15:00 – 15:30', 'Poster / Demo Session 2 and Coffee break'],
  ['org-talk', '15:30 – 15:45', '', 'yamazaki', ''],
  ['disc', '16:00 – 16:40', 'Panel discussion'],
  ['award', '16:40 – 17:00', 'Award & Closing Remarks'],
]
