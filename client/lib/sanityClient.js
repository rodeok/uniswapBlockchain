import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'bwux85zn',
  dataset: 'production',
  apiVersion: 'v1',
  token:
    'sk4Qcck9NFWzjLA2WzxMq6HZAR6Z1hPX4kJKRxGbhxc2VNwGwJgjquaqG8KiNCC3eGRCVzT7fn9Lc24PxeHR7khtiSR3YmHN8Ve5eQA3WTnPlcN5rxeb6V0ieT7w1pT9XAGZxFsnNCIgOARHC5TFPWsu4yoyMrdhMHMFZYm2q6Y8wTlB0BrM',
  useCdn: false,
})
