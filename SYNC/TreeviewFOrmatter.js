function groupData(data) {
  let idCounter = 1; // Initialize ID counter

  const generateId = () => idCounter++; // Incremental ID generator

  const groupByKey = (arr, key) => {
    return arr.reduce((acc, curr) => {
      const value = curr[key];
      if (!value) return acc;  // Skip null or empty values
      if (!acc[value]) acc[value] = [];
      acc[value].push(curr);
      return acc;
    }, {});
  };

  function buildNestedStructure(data, keys) {
    const groupRecursively = (data, depth = 0, parentId = null) => {
      if (depth === keys.length) return [];

      const grouped = groupByKey(data, keys[depth]);
      return Object.entries(grouped).map(([key, values]) => {
        const nodeId = generateId();
        return {
          id: nodeId,
          pid: parentId,
          name: key,
          child: groupRecursively(values, depth + 1, nodeId) // Recursive call
        };
      });
    };

    return groupRecursively(data);
  }

  const keys = ["Risk_Capital", "Business", "Division", "Product", "Desk", "Sub_Desk", "Portfolio"];
  return buildNestedStructure(data, keys);
}

// Example usage
const jsonData = [
  { "Risk_Capital": "APS116", "Business": "INSTITUTIONAL BANKING AND MARKETS", "Division": "GLOBAL MARKETS", "Product": "GLOBAL FIC", "Desk": "DESK1", "Sub_Desk": "SUBDESK1", "Portfolio": "PORT1" },
  { "Risk_Capital": "APS116", "Business": "INSTITUTIONAL BANKING AND MARKETS", "Division": "GLOBAL MARKETS", "Product": "GLOBAL FIC", "Desk": "DESK1", "Sub_Desk": "SUBDESK2", "Portfolio": "PORT2" },
  // (Other entries omitted for brevity)
  { "Risk_Capital": "APS117", "Business": "INSTITUTIONAL BANKING AND MARKETS2", "Division": "GLOBAL MARKETS4", "Product": "GLOBAL FIC4", "Desk": "DESK5", "Sub_Desk": "SUBDESK4", "Portfolio": "PORT43" }
];

const groupedData = groupData(jsonData);
console.log(JSON.stringify(groupedData, null, 2));
