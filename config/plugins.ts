export default ({ env }) => ({
    'users-permissions': {
        config: {
            jwtSecret: env('JWT_SECRET'),
        },
    },
    upload: {
        config: {
            provider: '@strapi-community/strapi-provider-upload-google-cloud-storage',
            providerOptions: {
              bucketName: env('GCS_BUCKET_NAME'),
              basePath: env('GCS_BASE_PATH'),
              generateUploadFileName: (file) => `media/${file.name}`,
            },
          },
    },
});
