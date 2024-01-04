export default function createIteratorObject(report) {
    const list = [];
    for (const department of Object.values(report.allEmployees)) {
      for (const employee of department) {
        list.push(employee);
      }
    }
    return list;
}
