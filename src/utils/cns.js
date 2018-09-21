export const genClassName = function(...args){
  return args.filter(a => !!a).join(' ')
}
