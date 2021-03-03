
export function getResponseData(result){
  console.log(result);
  return result.ok ? result.json() : Promise.reject(new Error(`Ошибка ${result.status}`));
}