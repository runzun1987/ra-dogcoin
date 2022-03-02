import { API, graphqlOperation } from 'aws-amplify';
import { getSettings } from './src/graphql/queries';

export const settings = async () => {
  const result = await API.graphql(
    graphqlOperation(getSettings, {
      id: '3e7bebed-33c2-4a39-885d-27b9f319787d',
    })
  );

  const data = result.data.getSettings;

  const { message, ogUrl, limit, increment } = data;
  return {
    message,
    ogUrl,
    limit,
    increment,
  };
};
