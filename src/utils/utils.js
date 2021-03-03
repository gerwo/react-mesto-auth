
export function getResponseData(result){
  return result.ok ? result.json() : Promise.reject(new Error(`Ошибка ${result.status}`));
}