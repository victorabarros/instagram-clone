import React from "react"
import { ScrollView, View } from "react-native"
import { FeedPost } from "./src/components/FeedPost"


const App = () => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <FeedPost {...post} />
    </ScrollView>
  )
}

export default App

const post = {
  id: '1',
  createdAt: '19 December 2021',
  image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/2.jpg',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic repellendus unde blanditiis. Eos fugiat dolorem ea fugit aut sapiente corrupti autem dolores deleniti architecto, omnis, amet unde dignissimos quam minima?',
  user: {
    image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
    username: 'vadimnotjustdev',
  },
  nofComments: 11,
  nofLikes: 33,
  comments: [
    {
      id: '1',
      text: 'Hello there',
      user: {
        username: 'vadim',
      },
    },
    {
      id: '2',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. H',
      user: {
        username: 'notjustdev',
      },
    },
  ],
}
