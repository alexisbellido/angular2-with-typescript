export default (a, b) => a + b;

export let diff = (a, b) => a- b;

export function sayBye(name?: string) {
  if (name) {
    console.log(`Bye ${name}`);
  } else {
    console.log('Bye Anonymous');
  }
}
