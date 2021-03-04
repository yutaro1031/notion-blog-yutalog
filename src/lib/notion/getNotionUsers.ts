import { notionApiClient } from "./openApi";

type Users = {
  [id in string]: {
    full_name: string;
  };
};

export const getNotionUsers = async (ids: string[]) => {
  const { data } = await notionApiClient.getRecordValues({
    requests: ids.map((id: string) => ({
      id,
      table: "notion_user",
    })),
  });

  const users: Users = {};

  for (const result of data.results) {
    const { id, given_name, family_name } = result.value;
    let full_name = given_name;
    if (family_name) {
      full_name = `${full_name} ${family_name}`;
    }
    users[id] = { full_name };
  }

  return { users };
};
