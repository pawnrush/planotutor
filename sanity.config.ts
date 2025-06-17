import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'

// Import the schemas you will create
import post from './schemas/post'
import blockContent from './schemas/blockContent'

export default defineConfig({
  name: 'default',
  title: 'Plano Tutor Studio',

  // Make sure these match your project details from sanity.io/manage
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,

  plugins: [deskTool(), visionTool()],

  schema: {
    // Add your schemas to this array
    types: [post, blockContent],
  },
})
