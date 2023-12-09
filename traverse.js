function traverse(ast, visitors) {
    function walkNodes(nodes, parent) {
        nodes.forEach(node => walkNode(node, parent))
    }

    function walkNode(node, parent) {
        const method = visitors[node.type];
        method && method(node, parent);
        node.type === 'Program' && walkNodes(node.body, node)
        node.type === 'CallExpression' && walkNodes(node.params, node);
    }
    walkNode(ast, null);
}

module.exports = traverse;