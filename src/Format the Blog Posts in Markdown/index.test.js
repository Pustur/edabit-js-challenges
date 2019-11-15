import formatBlogPost from './index';

const posts = [
  {
    id: 1,
    userId: 10,
    timestamp: 1536581919628,
    title: 'varius ut blandit non interdum in ante',
    body:
      'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
  },
  {
    id: 2,
    userId: 1,
    timestamp: 1516722015166,
    title: 'sapien sapien non mi integer ac neque duis',
    body:
      'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
  },
  {
    id: 3,
    userId: 8,
    timestamp: 1522497310076,
    title: 'diam erat fermentum justo nec',
    body:
      'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
  },
  {
    id: 4,
    userId: 3,
    timestamp: 1541160338882,
    title: 'eget massa tempor convallis nulla neque',
    body:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
  },
  {
    id: 5,
    userId: 9,
    timestamp: 1525927114746,
    title: 'odio condimentum id',
    body:
      'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.',
  },
  {
    id: 6,
    userId: 9,
    timestamp: 1531204720272,
    title: 'justo in hac habitasse platea dictumst etiam',
    body:
      'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
  },
  {
    id: 7,
    userId: 3,
    timestamp: 1527231596726,
    title: 'interdum mauris non ligula pellentesque ultrices',
    body:
      'Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
  },
  {
    id: 8,
    userId: 3,
    timestamp: 1521604672700,
    title: 'sapien dignissim vestibulum vestibulum ante ipsum primis in',
    body:
      'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
  },
  {
    id: 9,
    userId: 9,
    timestamp: 1539663119333,
    title: 'vulputate vitae nisl aenean lectus pellentesque eget',
    body:
      'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
  },
  {
    id: 10,
    userId: 6,
    timestamp: 1527484840843,
    title: 'nunc commodo placerat',
    body:
      'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
  },
];

const users = [
  {
    id: 1,
    firstName: 'Charlot',
    lastName: 'Ivons',
    email: 'civons0@cyberchimps.com',
  },
  {
    id: 2,
    firstName: 'Ced',
    lastName: "O'Cannan",
    email: 'cocannan1@gravatar.com',
  },
  {
    id: 3,
    firstName: 'Stu',
    lastName: 'Insko',
    email: 'sinsko2@indiegogo.com',
  },
  {
    id: 4,
    firstName: 'Quintus',
    lastName: 'Hallut',
    email: 'qhallut3@cnn.com',
  },
  {
    id: 5,
    firstName: 'Cate',
    lastName: 'Firby',
    email: 'cfirby4@tuttocitta.it',
  },
  {
    id: 6,
    firstName: 'Sutton',
    lastName: 'Goneau',
    email: 'sgoneau5@reddit.com',
  },
  {
    id: 7,
    firstName: 'Sauveur',
    lastName: 'Kettow',
    email: 'skettow6@soundcloud.com',
  },
  {
    id: 8,
    firstName: 'Rozalin',
    lastName: 'Georgins',
    email: 'rgeorgins7@marketwatch.com',
  },
  {
    id: 9,
    firstName: 'Vittorio',
    lastName: 'Rimer',
    email: 'vrimer8@google.it',
  },
  {
    id: 10,
    firstName: 'Sigismond',
    lastName: 'Reavell',
    email: 'sreavell9@cargocollective.com',
  },
];

const outputs = [
  '# Varius ut blandit non interdum in ante\n\nWritten by [Sigismond Reavell](mailto:sreavell9@cargocollective.com) on Mon, September 10, 2018\n\n---\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
  '# Sapien sapien non mi integer ac neque duis\n\nWritten by [Charlot Ivons](mailto:civons0@cyberchimps.com) on Tue, January 23, 2018\n\n---\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
  '# Diam erat fermentum justo nec\n\nWritten by [Rozalin Georgins](mailto:rgeorgins7@marketwatch.com) on Sat, March 31, 2018\n\n---\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
  '# Eget massa tempor convallis nulla neque\n\nWritten by [Stu Insko](mailto:sinsko2@indiegogo.com) on Fri, November 02, 2018\n\n---\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
  '# Odio condimentum id\n\nWritten by [Vittorio Rimer](mailto:vrimer8@google.it) on Thu, May 10, 2018\n\n---\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.',
  '# Justo in hac habitasse platea dictumst etiam\n\nWritten by [Vittorio Rimer](mailto:vrimer8@google.it) on Tue, July 10, 2018\n\n---\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
  '# Interdum mauris non ligula pellentesque ultrices\n\nWritten by [Stu Insko](mailto:sinsko2@indiegogo.com) on Fri, May 25, 2018\n\n---\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
  '# Sapien dignissim vestibulum vestibulum ante ipsum primis in\n\nWritten by [Stu Insko](mailto:sinsko2@indiegogo.com) on Wed, March 21, 2018\n\n---\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
  '# Vulputate vitae nisl aenean lectus pellentesque eget\n\nWritten by [Vittorio Rimer](mailto:vrimer8@google.it) on Tue, October 16, 2018\n\n---\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
  '# Nunc commodo placerat\n\nWritten by [Sutton Goneau](mailto:sgoneau5@reddit.com) on Mon, May 28, 2018\n\n---\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
];

test('formatBlogPost', () => {
  posts.forEach((post, i) => {
    expect(formatBlogPost(post, users)).toBe(outputs[i]);
  });
});
