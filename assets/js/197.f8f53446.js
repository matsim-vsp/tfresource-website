(window.webpackJsonp=window.webpackJsonp||[]).push([[197],{397:function(t,e,s){"use strict";s.r(e);var o=s(7),a=Object(o.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[s("strong",[t._v("Summary")])]),t._v(" "),s("p",[t._v("This page describes the method to find a path on a network. Travel costs used in path finding are discussed, and a simple example in five steps visualizes how the shortest path is found.")]),t._v(" "),s("h2",{attrs:{id:"path-finding-problem"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#path-finding-problem"}},[t._v("#")]),t._v(" Path finding problem")]),t._v(" "),s("p",[t._v("To assign traffic volumes to a highway network (compare "),s("a",{attrs:{href:"Network_assignment"}},[t._v("Network Assignment")]),t._v("), a path needs to be chosen for every origin-destination pair. A path consists of a series of links that minimize travel costs from an origin to a destination.\nSee an example from Open Street Map below.")]),t._v(" "),s("p",[s("img",{attrs:{src:"Pathfinding.png",alt:"Map of a small section of Washington DC, showing a path from from an origin to a destination.",title:"Map with path from origin to destination"}})]),t._v(" "),s("p",[t._v("(Source: "),s("a",{attrs:{href:"http://www.openstreetmap.org/#map=16/38.9033/-77.0461",target:"_blank",rel:"noopener noreferrer"}},[t._v("OpenStreetMap.org"),s("OutboundLink")],1),t._v(" )")]),t._v(" "),s("h2",{attrs:{id:"travel-costs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#travel-costs"}},[t._v("#")]),t._v(" Travel costs")]),t._v(" "),s("p",[t._v("The shortest path minimizes travel costs. Travel costs may be defined as a combination of several path attributes:")]),t._v(" "),s("ul",[s("li",[t._v("Travel time (the most common representation of travel costs)")]),t._v(" "),s("li",[t._v("Travel distance (travelers have a tendency to choose the shorter path in distance, even if this path is slightly longer in time")]),t._v(" "),s("li",[t._v("Types of maneuvers required (travelers tend to prefer paths with fewer turning movements)")]),t._v(" "),s("li",[t._v("Monetary costs for fuel or tolls")]),t._v(" "),s("li",[t._v("Reliability of travel time")]),t._v(" "),s("li",[t._v("Signposting and road works")]),t._v(" "),s("li",[t._v("Number of transfers and crowding (for transit)")]),t._v(" "),s("li",[t._v("Scenery")])]),t._v(" "),s("p",[t._v("In practice, a combination of time, distance and costs are used for the highway assignment. If monetary costs of travel are included, costs in are converted to equivalent minutes based on an assumed value of time. Converting costs into equivalent minutes ensures that monetary costs and time are handled in the same unit (here: minutes).")]),t._v(" "),s("h2",{attrs:{id:"path-finding-in-5-steps"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#path-finding-in-5-steps"}},[t._v("#")]),t._v(" Path finding in 5 steps")]),t._v(" "),s("p",[t._v("For the human eye, it is trivial to find the shortest path on a simple network. In reality, however, networks tend to be much more complicated:")]),t._v(" "),s("ul",[s("li",[t._v("Often there are several competing paths with small differences in travel costs.")]),t._v(" "),s("li",[t._v("Travel speed on various links may be different, which may make a visually longer path using highways shorter in travel time than using local roads.")]),t._v(" "),s("li",[t._v("Adding more vehicles to a link increases congestion, and thereby, slows down travel speed. A detour that avoids the worst congestion may be the fastest path.")])]),t._v(" "),s("p",[t._v("In travel demand modeling, a path finding algorithm is used to select the shortest path that minimizes travel costs.")]),t._v(" "),s("p",[s("img",{attrs:{src:"PathFinding01.jpeg",alt:"Graph with nodes labeled S, A, B, C, D and distances on links",title:"Graph with nodes and distances on links"}}),t._v(" A simple example visualizes how the path with minimum travel costs is chosen. While this is a simplistic example, the same concept applies to complicated networks. For a more complex example, "),s("a",{attrs:{href:"http://www.nealbohling.com/code/dijkstra/",target:"_blank",rel:"noopener noreferrer"}},[t._v("this website has a good visualization"),s("OutboundLink")],1),t._v(" of how Dijkstra's works with a grid network.")]),t._v(" "),s("p",[t._v("This graphic shows a network with five nodes and six links. The blue numbers represent travel time in minutes, the only costs considered in this path-finding example. The task is to identify the shortest path from start node S to destination node D.")]),t._v(" "),s("h3",{attrs:{id:"step-1"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#step-1"}},[t._v("#")]),t._v(" Step 1")]),t._v(" "),s("p",[t._v("Initially, create a list of distances between the origin S and all other nodes. The distance to node S is set to 0 (d"),s("sub",[t._v("S")]),t._v(" = 0). The distance to all other nodes is set to infinity (∞), or a very large number that is greater than any distance in the network.")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Distance list")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("d"),s("sub",[t._v("S")]),t._v(" = 0 minutes")])]),t._v(" "),s("tr",[s("td",[t._v("d"),s("sub",[t._v("A")]),t._v(" = ∞")])]),t._v(" "),s("tr",[s("td",[t._v("d"),s("sub",[t._v("B")]),t._v(" = ∞")])]),t._v(" "),s("tr",[s("td",[t._v("d"),s("sub",[t._v("C")]),t._v(" = ∞")])]),t._v(" "),s("tr",[s("td",[t._v("d"),s("sub",[t._v("D")]),t._v(" = ∞")])])])]),t._v(" "),s("h3",{attrs:{id:"step-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#step-2"}},[t._v("#")]),t._v(" Step 2")]),t._v(" "),s("p",[s("img",{attrs:{src:"PathFinding02.jpg",alt:"Full graph from above on left, tree structure of path so far on right",title:"Diagram showing Step 2"}}),t._v("\nNext, create a tree that shows all nodes that are linked directly to Origin S (here, this is nodes A and B). For each node, look up the travel costs (here, 2 and 4 minutes).")]),t._v(" "),s("p",[t._v("Based on this tree, you need to update the distance list. The new distance list will be:")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Distances from node S")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("d"),s("sub",[t._v("S")]),t._v(" = 0 minutes")])]),t._v(" "),s("tr",[s("td",[t._v("d"),s("sub",[t._v("A")]),t._v(" = "),s("s",[t._v("∞")]),t._v(" 2 minutes")])]),t._v(" "),s("tr",[s("td",[t._v("d"),s("sub",[t._v("B")]),t._v(" = "),s("s",[t._v("∞")]),t._v(" 4 minutes")])]),t._v(" "),s("tr",[s("td",[t._v("d"),s("sub",[t._v("C")]),t._v(" = ∞")])]),t._v(" "),s("tr",[s("td",[t._v("d"),s("sub",[t._v("D")]),t._v(" = ∞")])])])]),t._v(" "),s("p",[t._v("We also need to keep a list of loose ends, that is nodes at the end of the tree shown above. In this case, we have 2 loose ends (nodes A and B).")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Loose-end table")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("Node A")])]),t._v(" "),s("tr",[s("td",[t._v("Node B")])])])]),t._v(" "),s("p",[t._v('For each loose end, we also note the "predecessor" node. In this case, the predecessor to both A and B is node S.')]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Predecessor list")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("P"),s("sub",[t._v("A")]),t._v(" = S")])]),t._v(" "),s("tr",[s("td",[t._v("P"),s("sub",[t._v("B")]),t._v(" = S")])])])]),t._v(" "),s("h3",{attrs:{id:"step-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#step-3"}},[t._v("#")]),t._v(" Step 3")]),t._v(" "),s("p",[t._v("Select the first node from the loose-end table (here node A).")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Loose-end table")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("s",[t._v("Node A")])])]),t._v(" "),s("tr",[s("td",[t._v("Node B")])])])]),t._v(" "),s("p",[s("img",{attrs:{src:"PathFinding3.jpg",alt:"Full graph from above on left, tree structure of path so far on right",title:"Diagram showing Step 3"}}),t._v(" Using the network, find the next link that connects to node A (here the link from A to D). Add this link to the tree structure shown on the right. Update the predecessor list by adding the predecessor for D:")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Predecessor list")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("P"),s("sub",[t._v("A")]),t._v(" = S")])]),t._v(" "),s("tr",[s("td",[t._v("P"),s("sub",[t._v("B")]),t._v(" = S")])]),t._v(" "),s("tr",[s("td",[t._v("P"),s("sub",[t._v("D")]),t._v(" = A")])])])]),t._v(" "),s("p",[t._v("Next, update the distance list from S to D (2 + 8 = 10 minutes). Mathematically, the distance is calculated by following the tree from S to A to D.")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Distances from node S")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("d"),s("sub",[t._v("S")]),t._v(" = 0 minutes")])]),t._v(" "),s("tr",[s("td",[t._v("d"),s("sub",[t._v("A")]),t._v(" = 2 minutes")])]),t._v(" "),s("tr",[s("td",[t._v("d"),s("sub",[t._v("B")]),t._v(" = 4 minutes")])]),t._v(" "),s("tr",[s("td",[t._v("d"),s("sub",[t._v("C")]),t._v(" = ∞")])]),t._v(" "),s("tr",[s("td",[t._v("d"),s("sub",[t._v("D")]),t._v(" = "),s("s",[t._v("∞")]),t._v("10 minutes")])])])]),t._v(" "),s("p",[t._v("Because D is our destination node, we do not need to add D to the loose-end table.")]),t._v(" "),s("h3",{attrs:{id:"step-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#step-4"}},[t._v("#")]),t._v(" Step 4")]),t._v(" "),s("p",[t._v("Select the next node from the loose-end table (here node B).")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Loose-end table")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("s",[t._v("Node A")])])]),t._v(" "),s("tr",[s("td",[s("s",[t._v("Node B")])])])])]),t._v(" "),s("p",[s("img",{attrs:{src:"PathFinding04.jpg",alt:"Full graph from above on left, on right, tree structure of path so far on right",title:"Diagram showing Step 4"}}),t._v(" Using the network, find the links that connects to node B (here the link from B to C and the link from B to D). Add these links to the tree structure as shown on the right. Update the predecessor list by adding the predecessor for C:")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Predecessor list")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("P"),s("sub",[t._v("A")]),t._v(" = S")])]),t._v(" "),s("tr",[s("td",[t._v("P"),s("sub",[t._v("B")]),t._v(" = S")])]),t._v(" "),s("tr",[s("td",[t._v("P"),s("sub",[t._v("C")]),t._v(" = B")])]),t._v(" "),s("tr",[s("td",[t._v("P"),s("sub",[t._v("D")]),t._v(" = A")])])])]),t._v(" "),s("p",[t._v("Update the distance list from S to C (4 + 3 = 7 minutes) by following the tree structure. The distance to C is added to the distance list:")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Distances from node S")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("d"),s("sub",[t._v("S")]),t._v(" = 0 minutes")])]),t._v(" "),s("tr",[s("td",[t._v("d"),s("sub",[t._v("A")]),t._v(" = 2 minutes")])]),t._v(" "),s("tr",[s("td",[t._v("d"),s("sub",[t._v("B")]),t._v(" = 4 minutes")])]),t._v(" "),s("tr",[s("td",[t._v("d"),s("sub",[t._v("C")]),t._v(" = "),s("s",[t._v("∞")]),t._v(" 7 minutes")])]),t._v(" "),s("tr",[s("td",[t._v("d"),s("sub",[t._v("D")]),t._v(" = 10 minutes")])])])]),t._v(" "),s("p",[t._v("We also found another path to node D. The travel costs from S via B to D is 11 minutes (4 + 7). This is more than the travel time from S via A to D (10 minutes). The previously found path is faster, and the longer path S-to-B-to-D is ignored.")]),t._v(" "),s("p",[t._v("Finally, we need to update the loose-end table by adding C as another loose end in the tree structure:")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Loose-end table")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("s",[t._v("Node A")])])]),t._v(" "),s("tr",[s("td",[s("s",[t._v("Node B")])])]),t._v(" "),s("tr",[s("td",[t._v("Node C")])])])]),t._v(" "),s("h3",{attrs:{id:"step-5"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#step-5"}},[t._v("#")]),t._v(" Step 5")]),t._v(" "),s("p",[t._v("Select the next node from the loose-end table (here node C).")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Loose-end table")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("s",[t._v("Node A")])])]),t._v(" "),s("tr",[s("td",[s("s",[t._v("Node B")])])]),t._v(" "),s("tr",[s("td",[s("s",[t._v("Node C")])])])])]),t._v(" "),s("p",[s("img",{attrs:{src:"PathFinding05.jpg",alt:"Full graph from above on left, on right, tree structure of path so far on right",title:"Diagram showing Step 5"}}),t._v(" Using the network, find the next link that connects to node C (here the link from C to D). Add this links to the tree structure shown on the right.")]),t._v(" "),s("p",[t._v("Calculate the distance list from S via B and C to D (4 + 3 + 2 = 9 minutes) by following the tree structure. The distance S-to-B-to-C-to-D is shorter than the distance S-to-A-to-D (which was 10 minutes). Therefore, the distance list is updated:")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Distances from node S")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("d"),s("sub",[t._v("S")]),t._v(" = 0 minutes")])]),t._v(" "),s("tr",[s("td",[t._v("d"),s("sub",[t._v("A")]),t._v(" = 2 minutes")])]),t._v(" "),s("tr",[s("td",[t._v("d"),s("sub",[t._v("B")]),t._v(" = 4 minutes")])]),t._v(" "),s("tr",[s("td",[t._v("d"),s("sub",[t._v("C")]),t._v(" = 7 minutes")])]),t._v(" "),s("tr",[s("td",[t._v("d"),s("sub",[t._v("D")]),t._v(" = "),s("s",[t._v("10")]),t._v(" 9 minutes")])])])]),t._v(" "),s("p",[t._v("Accordingly, the predecessor list is updated. Using the predecessor C on the way to D is the new fastest route to travel from S to D:")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Predecessor list")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("P"),s("sub",[t._v("A")]),t._v(" = S")])]),t._v(" "),s("tr",[s("td",[t._v("P"),s("sub",[t._v("B")]),t._v(" = S")])]),t._v(" "),s("tr",[s("td",[t._v("P"),s("sub",[t._v("C")]),t._v(" = B")])]),t._v(" "),s("tr",[s("td",[t._v("P"),s("sub",[t._v("D")]),t._v(" = "),s("s",[t._v("A")]),t._v(" C")])])])]),t._v(" "),s("p",[t._v("All final nodes in the tree structure are D nodes and the predecessor list is empty. The fastest path from S to D has been found.")]),t._v(" "),s("h2",{attrs:{id:"node-selection-order"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#node-selection-order"}},[t._v("#")]),t._v(" Node selection order")]),t._v(" "),s("p",[t._v("This simple example selected nodes in the order they were added to the loose-end table. Moore (1957)"),s("sup",{staticClass:"footnote-ref"},[s("a",{attrs:{href:"#fn1",id:"fnref1"}},[t._v("[1]")])]),t._v(" showed that the algorithm works faster if not the first node but the last node in the loose-end table is chosen next.")]),t._v(" "),s("p",[t._v("Dijkstra (1959)"),s("sup",{staticClass:"footnote-ref"},[s("a",{attrs:{href:"#fn2",id:"fnref2"}},[t._v("[2]")])]),t._v(" proposed two years later that instead of selecting the first or the last link in the loose-end table, the fastest solution if found if the closest node to start node S is selected next. The famous Dijkstra algorithm has become the standard in path finding.")]),t._v(" "),s("h2",{attrs:{id:"references"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[t._v("#")]),t._v(" References")]),t._v(" "),s("hr",{staticClass:"footnotes-sep"}),t._v(" "),s("section",{staticClass:"footnotes"},[s("ol",{staticClass:"footnotes-list"},[s("li",{staticClass:"footnote-item",attrs:{id:"fn1"}},[s("p",[t._v("E.F. Moore (1957) The shortest path through a maze. In: Proceedings of an International Symposium on the Theory of Switching, 2–5 April 1957. Also published in: "),s("i",[t._v("Annals of the Computation Laboratory of Harvard University")]),t._v(", 1959, Volume 30, Pages 285–292. "),s("a",{staticClass:"footnote-backref",attrs:{href:"#fnref1"}},[t._v("↩︎")])])]),t._v(" "),s("li",{staticClass:"footnote-item",attrs:{id:"fn2"}},[s("p",[t._v("E. W. Dijkstra (1959): A note on two problems in connexion with graphs. In: "),s("i",[t._v("Numerische Mathematik")]),t._v(", December 1959, Volume 1, Issue 1, Pages 269–271. "),s("a",{staticClass:"footnote-backref",attrs:{href:"#fnref2"}},[t._v("↩︎")])])])])])])}),[],!1,null,null,null);e.default=a.exports}}]);