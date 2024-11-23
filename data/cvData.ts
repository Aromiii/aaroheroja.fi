import { CV } from '../types/cv'

const cvData: CV = {
  education: [
    {
      schoolName: 'Hyvinkään lukio - Kipinä',
      title: 'Ylioppilastutkinto',
      startDate: new Date(2023, 8),
    },
  ],
  experience: [
    {
      company: 'Kevytyrittäjä',
      positions: [
        {
          title: 'Maanmittaaja',
          startDate: new Date(2024, 6),
          endDate: new Date(2024, 6),
          skills: ['Työturvallisuus', 'Maanmittaus'],
        },
      ],
    },
  ],
  volunteerExperience: [
    {
      company: 'Suomen Partiolaiset - Finlands Scouter ry',
      companyLogoImgSrc: '/static/images/partio_sp.svg',
      positions: [
        {
          title: 'Vaalitoimikunnan jäsen',
          startDate: new Date(2024, 3),
          timeSpentPerMonth: 12,
        },
        {
          title: 'Y-trainee projektiryhmän jäsen',
          startDate: new Date(2024, 3),
          timeSpentPerMonth: 2,
        },
        {
          title: 'Digiryhmän jäsen',
          startDate: new Date(2023, 11),
          timeSpentPerMonth: 2,
        },
        {
          title: 'Sovelluskehittäjäexpertti | Explo 2023',
          startDate: new Date(2023, 3),
          endDate: new Date(2024, 10),
          timeSpentPerMonth: 3,
        },
        {
          title: 'Sisällöntuottaja | Johtajatulet 2023',
          startDate: new Date(2023, 4),
          endDate: new Date(2023, 8),
          timeSpentPerMonth: 4,
        },
      ],
    },
    {
      company: 'Partiojournalistit ry',
      companyLogoImgSrc: '/static/images/partio_journalistit.jpg',
      positions: [
        {
          title: 'Projektipäällikkö | Riippari-sovellus',
          startDate: new Date(2024, 4),
          timeSpentPerMonth: 3,
        },
      ],
    },
    {
      company: 'Lounais-Suomen Partiopiiri ry',
      companyLogoImgSrc: '/static/images/partio_lsp.jpg',
      positions: [
        {
          title: 'Brändi- ja viestintämestari | HuHu 2024',
          startDate: new Date(2023, 10),
          endDate: new Date(2024, 8),
          timeSpentPerMonth: 10,
          description: 'Pesti vastaa päällikkötasoa L-SP:n pestijärjetelmän eroavuuden takia.',
        },
      ],
    },
    {
      company: 'Pohjanmaan Partiolaiset ry',
      companyLogoImgSrc: '/static/images/partio_pohjanmaa.png',
      positions: [
        {
          title: 'Webmaster | Orbis2025',
          startDate: new Date(2024, 3),
          timeSpentPerMonth: 5,
        },
      ],
    },
    {
      company: 'Pääkaupunkiseudun Partiolaiset ry',
      companyLogoImgSrc: '/static/images/partio_papa.jpg',
      positions: [
        {
          title: 'Analytiikkamestari | Kimara 2024',
          startDate: new Date(2023, 11),
          timeSpentPerMonth: 3,
        },
      ],
    },
    {
      company: 'Uudenmaan Partiopiiri ry',
      companyLogoImgSrc: 'https://uusimaa.kuvat.fi/kansiot/LOGOT/Kokkalogo.png?img=smaller',
      positions: [
        {
          title: 'Brändi- ja verkkosivupäällikkö | Hanki palaa -25 talvi-SM kisat',
          startDate: new Date(2024, 7),
          timeSpentPerMonth: 2,
        },
        {
          title: 'Hautomon jäsen',
          startDate: new Date(2022, 10),
          timeSpentPerMonth: 4,
        },
        {
          title: 'Viestintä ja markkinointiryhmän jäsen',
          startDate: new Date(2022, 12),
          endDate: new Date(2023, 10),
          timeSpentPerMonth: 3,
        },
      ],
    },
    {
      company: 'Hyvinkään Nummenpojat ry',
      companyLogoImgSrc:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fnummenpojat.fi%2Fwp-content%2Fuploads%2F2023%2F03%2Fcropped-HN-reunaton-logo-png.png&f=1&nofb=1&ipt=b2f1004c1317e68be4f4060b38526d2360cb4502b74af455b179af87672741f5&ipo=images',
      positions: [
        {
          title: 'Retkenjohtaja | TaSaVa 14',
          startDate: new Date(2023, 8),
          endDate: new Date(2023, 10),
          timeSpentPerMonth: 15,
        },
        {
          title: 'Hallituksen jäsen, Viestintä ja markkinointi',
          startDate: new Date(2023, 1),
          timeSpentPerMonth: 3,
        },
        {
          title: 'Viestintä ja markkinointijohtaja',
          startDate: new Date(2022, 11),
          timeSpentPerMonth: 6,
        },
        {
          title: 'Ryhmänjohtaja',
          startDate: new Date(2022, 9),
          timeSpentPerMonth: 10,
        },
        {
          title: 'Digikehittäjä',
          startDate: new Date(2022, 4),
          endDate: new Date(2022, 10),
          timeSpentPerMonth: 4,
        },
      ],
    },
    {
      company: 'Hyvinkään lukio',
      positions: [
        {
          title: 'Oppilaskunnan hallituksen jäsen',
          startDate: new Date(2024, 1),
          endDate: new Date(2024, 9),
          timeSpentPerMonth: 6,
        },
      ],
    },
  ],
  coursesLicensesAndCertifications: [
    {
      title: 'Y-trainee kurssi',
      issueDate: new Date(2024, 6),
      issuerName: 'Suomen Partiolaiset - Finlands Scouter ry',
      issuerLogo: '/static/images/partio_sp.svg',
    },
    {
      title: 'PSK 6803 Työturvallisuus',
      issueDate: new Date(2024, 5),
      issuerName: 'Verkkokoulu.com',
      issuerLogo: '/static/images/verkkokoulu.jpg',
    },
    {
      title: 'Ryhmänohjaajakoulutus',
      issueDate: new Date(2023, 3),
      issuerName: 'Hyvinkään Nummenpojat ry',
      issuerLogo:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fnummenpojat.fi%2Fwp-content%2Fuploads%2F2023%2F03%2Fcropped-HN-reunaton-logo-png.png&f=1&nofb=1&ipt=b2f1004c1317e68be4f4060b38526d2360cb4502b74af455b179af87672741f5&ipo=images',
    },
    {
      title: 'Young spokespeople -kurssi',
      issuerName: 'Suomen Partiolaiset - Finlands Scouter ry',
      issueDate: new Date(2023, 1),
      issuerLogo: '/static/images/partio_sp.svg',
    },
    {
      title: 'Turvallisesti yhdessä -verkkokurssi',
      issuerName: 'Suomen Partiolaiset - Finlands Scouter ry',
      issueDate: new Date(2022, 6),
      issuerLogo: '/static/images/partio_sp.svg',
    },
  ],
}

export default cvData
