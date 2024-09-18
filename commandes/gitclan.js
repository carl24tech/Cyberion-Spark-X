/*const { zokou } = require("../framework/zokou");
const axios = require('axios');

//--------
async function githubstalk(user) {
    return new Promise((resolve, reject) => {
        axios.get('https://api.github.com/users/'+user)
        .then(({ data }) => {
            let info = {
                username: data.login,
                name: data.name,
                bio: data.bio,
                id: data.id,
                nodeId: data.node_id,
                profile_pic: data.avatar_url,
                html_url: data.html_url,
                type: data.type,
                admin: data.site_admin,
                company: data.company,
                blog: data.blog,
                location: data.location,
                email: data.email,
                public_repo: data.public_repos,
                public_gists: data.public_gists,
                followers: data.followers,
                following: data.following,
                created_at: data.created_at,
                updated_at: data.updated_at
            };
            resolve(info);
        });
    });
}

zokou(
  {
    nomCom: 'github',
    alias: ['githubstalk'],
    categorie: 'gitclan',
    reaction: '🔄'
  },
  
  async (dest, zk, {ms, arg, repondre}) => {
    if (!arg[0]) return await repondre("Username is missing");
    try {
    const { username, following, followers, type, bio, company, blog, location, email, public_repo, public_gists, profile_pic, created_at, updated_at, html_url, name, id } = await githubstalk(arg.join(' '));
    const info = `*── 「 GITHUB USER INFO 」 ──*

📔 *Nickname :* ${name}
🥇 *Username :* ${username}
😎 *Id :* ${id}
🔎 *Bio :* ${bio}
🏢 *Company :* ${company}
➿️ *Location :* ${location}
📧 *Email :* ${email}
📰 *Blog :* ${blog}
🔓 *Public Repos :* ${axios.get(public_repo).then((res) => res.data.map((repo) => !repo.private ? `\n- *${repo.name}* : https://github.com/${repo.full_name}`: null))}
🔐 *Public Gists :* https://gist.github.com/${username}/
🫤 *Followers :* ${followers}
😕 *Following :* ${following}
🔄 *Updated At :* ${updated_at}
🤡 *Created At :* ${created_at}
👤 *Profile :* ${html_url}`;
    await zk.sendMessage(dest, {
      image: {url: profile_pic},
      caption: info
    }, {quoted: ms});
    } catch {
      await repondre("something went wrong : check user name");
    }
  }
  );
