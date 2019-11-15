const capitalize = str => str.slice(0, 1).toUpperCase() + str.slice(1);

const formatBlogPost = (post, users) => {
  const user = users.find(({ id }) => id === post.userId);
  const title = `# ${capitalize(post.title)}`;
  const date = new Date(post.timestamp).toLocaleDateString('en-US', {
    day: '2-digit',
    weekday: 'short',
    month: 'long',
    year: 'numeric',
  });
  const author = `[${user.firstName} ${user.lastName}](mailto:${user.email})`;
  const metadata = `Written by ${author} on ${date}`;

  return [title, metadata, '---', post.body].join('\n\n');
};

export default formatBlogPost;
