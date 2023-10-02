const localStorage = window.localStorage;

type JSONValue = string | number | JSONObject | JSONArray | boolean | null;

type JSONObject = {
  [x: string]: JSONValue;
};

type JSONArray = Array<JSONValue>;

export const getLocalStorage = (prefixKey: string = '') => {
  const genKey = (prefixKey: string, key: string) => `${prefixKey}__${key}`;

  function getItem(key: string) {
    const _key = genKey(prefixKey, key);
    const rawData = localStorage.getItem(_key);
    const data = rawData ? JSON.parse(rawData) : null;

    return data;
  }

  function setItem(key: string, value: JSONValue) {
    const _key = genKey(prefixKey, key);

    if (typeof value === 'string') {
      localStorage.setItem(_key, value);
      return;
    }

    localStorage.setItem(_key, JSON.stringify(value));
  }

  return { getItem, setItem };
};
