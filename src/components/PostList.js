import React, { Component } from 'react';

import Post from './Post';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Júlio Alcantara',
          avatar: 'https://randomuser.me/api/portraits/men/33.jpg'
        },
        date: '04 Jun 2019',
        content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Diego Fernandes',
              avatar: 'https://randomuser.me/api/portraits/men/25.jpg'
            },
            content: "A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando videos e criando posts, pode me chamar no Discord! (Sério, me chamem memso, esse comentário é real)"
          }
        ],
      },
      {
        id: 2,
        author: {
          name: 'Gabriel Lisboa',
          avatar: 'https://randomuser.me/api/portraits/men/15.jpg'
        },
        date: '04 Jun 2019',
        content: `Fala galera, Beleza?
        
          Estou fazendo o Bootcamp Gostack da RocketSeat e está sendo muito massa! Alguém mais ai fazendo, comenta na publicação para trocarmos uma ideia.
        `,
        comments: [
          {
            id: 1,
            author: {
              name: 'Clara Lisboa',
              avatar: 'https://randomuser.me/api/portraits/women/25.jpg'
            },
            content: "Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API dos desafios construida!"
          },
          {
            id: 2,
            author: {
              name: 'Cézar Toledo',
              avatar: 'https://randomuser.me/api/portraits/men/40.jpg'
            },
            content: "Que maaaaaaasa! Esotu pensando em me inscrever na próxima turma pra ver qual é desse Bootcamp GoStack, dizem que os devs saem de lá com super poderes!"
          }
        ],
      },
    ]
  };

  render() {
    return (
      <div className="container">
          {this.state.posts.map(post => (<Post key={post.id} post={post} />))}
      </div>
    )
  }
}

export default PostList