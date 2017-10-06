

//########## Script Steps ##############

function Test()
{

	/**
	 * @fileOverview
	 * This is recorded test for .NET 2.0 sample application. The test uses 'Managed' library.
	 * The application under test contains various standard GUI controls,
	 * such as: button, edit, tree, combo box, list box, list view, menu, grid etc.
	 *
	 * The test does actions on recorded objects and performs text check on edit box.
	 */

	Tester.Message("Executing test");
	//Tester.Assert("Failed assertion", false);

// AUT is launched in TestInit;

//Basic controls
//CheckBox
	//User toggles "checkBox" in window "AUTDotNet2"
	SeS('checkBox').DoSetCheck(true);
	//User toggles "checkBox" in window "AUTDotNet2"
	SeS('checkBox').DoSetCheck(false);
return;
//LinkLabel
	//User clicks at: 94, 1 in 'autLinkLabel'
	SeS('autLinkLabel').DoLClick(94, 1);
	//Verify that: WindowText=This is a link label (autLinkLabel).
	Tester.AssertEqual("Verify that: WindowText=This is a link label (autLinkLabel).", SeS('autLinkLabel').GetWindowText(), "This is a link label (autLinkLabel).");

//EditBox
	//User clicks at: 143, 8 in 'autEdit'
	SeS('autEdit').DoLClick(143, 8);
	//User enters text "12345" into "autEdit" in window "AUTDotNet2"
	SeS('autEdit').DoSetText("12345");
	
//TabControl
	//User clicks at: 65, 9 in 'autTabControl'
	SeS('autTabControl').DoLClick(65, 9);
	//User clicks at: 21, 8 in 'autTabControl'
	SeS('autTabControl').DoLClick(21, 8);
	
//ComboBox	
	//Select item:'1' in 'comboBox'
	SeS('comboBox').DoSelectItem(1);
	//Verify that Selected text = 'comboBoxItem1'
	Tester.AssertEqual("Verify that: Selected text = 'comboBoxItem1'", SeS('comboBox').GetSelectedText(), "comboBoxItem1");
	//Set text in ComboBox
	SeS('comboBox').DoSetText("Hello, World!");
//ListBox
	//Select items:'4' in 'listBox1'
	SeS('listBox1').DoSelectItem("listBoxItem4");
	//Verify that: SelectedIndex=4
	Tester.AssertEqual("Verify that: SelectedIndex=4", SeS('listBox1').GetSelectedIndex(), 4);
	//Select items:'0,1,2' in 'listBox1'
	SeS('listBox1').DoAddSelection("listBoxItem0;listBoxItem1;listBoxItem2");
	//Select items:'2' in 'listBox1'
	SeS('listBox1').DoRemoveSelection("listBoxItem2");
	//Select items:'1' in 'listBox1'
	SeS('listBox1').DoAddSelection("listBoxItem1");
	
	//Verify that: ItemIndexByName=1
	Tester.AssertEqual("Verify that: ItemIndexByName=1", SeS('listBox1').GetItemIndexByName("listBoxItem1"), 1);
	//Verify that: ItemNameByIndex=listBoxItem4
	Tester.AssertEqual("Verify that: ItemNameByIndex=listBoxItem4", SeS('listBox1').GetItemNameByIndex(4), "listBoxItem4");

//ListView
	//Select items:'0' in 'listView2'
	SeS('listView2').DoSelectItem("chckListViewItem0");
	//Verify that Selected Text is chckListViewItem0
	Tester.AssertEqual("Verify that: SelectedItem=chckListViewItem0", SeS('listView2').GetSelectedItems(true)[0], "chckListViewItem0");	
	//Select items:'1' in 'listView2'	
	SeS('listView2').DoSelectItem("chckListViewItem1");
	//Select items:'2' in 'listView2'
	SeS('listView2').DoSelectItem("chckListViewItem2");
	//Select items:'0,1' in 'listView2'
	SeS('listView2').DoAddSelection("chckListViewItem0;chckListViewItem1");

	Tester.AssertEqual("Verify that: SelectedItems.length==3", SeS('listView2').GetSelectedItems(true).length, 3);	

	//Remove items:'1' in 'listView2'
	SeS('listView2').DoRemoveSelection("chckListViewItem1");

	Tester.AssertEqual("Verify that: SelectedItems.length==2", SeS('listView2').GetSelectedItems(true).length, 2);	

	//Remove items:'1' in 'listView2'
	SeS('listView2').DoRemoveSelection("chckListViewItem3");
	Tester.AssertEqual("Verify that: SelectedItems.length==2", SeS('listView2').GetSelectedItems(true).length, 2);	

	//Check item:'chckListViewItem0' in 'listView2'
	SeS('listView2').DoCheckItem("chckListViewItem0");	
	//Verify that chckListViewItem0 is checked
	Tester.AssertEqual("Verify that: chckListViewItem0 is checked", SeS('listView2').GetCheckedItems(true)[0], "chckListViewItem0");	
	
	//Check item:'chckListViewItem2' in 'listView2'
	SeS('listView2').DoCheckItem("chckListViewItem2");
	//Select items:'3' in 'listView2'
	SeS('listView2').DoSelectItem("chckListViewItem3");
	//Check item:'chckListViewItem3' in 'listView2'
	SeS('listView2').DoCheckItem("chckListViewItem3");
	//Check item:'chckListViewItem3' in 'listView2'
	SeS('listView2').DoSetCheck(false, "chckListViewItem0");
	//Verify that: CheckedIndices=2;3
	Tester.AssertEqual("Verify that: CheckedIndices=2;3", SeS('listView2').GetCheckedIndices(), "2;3");
	SeS('listView2').DoSetCheck(true, "chckListViewItem0");
	//Verify that: CheckedIndices=0;2;3
	Tester.AssertEqual("Verify that: CheckedIndices=0;2;3", SeS('listView2').GetCheckedIndices(), "0;2;3");
	//Verify that: CheckedItems=chckListViewItem0;chckListViewItem2;chckListViewItem3
	Tester.AssertEqual("Verify that: CheckedItems=chckListViewItem0;chckListViewItem2;chckListViewItem3", SeS('listView2').GetCheckedItems(), "chckListViewItem0;chckListViewItem2;chckListViewItem3");
	//Verify that: SelectedItems=chckListViewItem3
	Tester.AssertEqual("Verify that: SelectedItems=chckListViewItem3", SeS('listView2').GetSelectedItems(), "chckListViewItem3");
	
	//Verify that: CheckedCount=3
	Tester.AssertEqual("Verify that: CheckedCount=3", SeS('listView2').GetCheckedCount(), 3);
	//Verify that: SelectionCount=1
	Tester.AssertEqual("Verify that: SelectionCount=1", SeS('listView2').GetSelectionCount(), 1);
//TreeView
	//User clicks on node "Root" in "treeViewCB"
	SeS('treeViewCB').DoClickNode("Root");
	//User clicks on node "Root;RootNode2;RootNode2Node3" in "treeViewCB"
	SeS('treeViewCB').DoClickNode("Root;RootNode2;RootNode2Node3");
	//User toggles "treeViewCB" in window "AUTDotNet2"
	SeS('treeViewCB').DoSetCheck(true, "Root;RootNode2;RootNode2Node4");
	
	//User collapses node "Root;RootNode2" in "treeViewCB"
	SeS('treeViewCB').DoCollapse("0;1", ";", "index");
	//User collapses node "Root" in "treeViewCB"
	SeS('treeViewCB').DoCollapse("0", ";", "index");
	//User toggles "treeViewCB" in window "AUTDotNet2"
	SeS('treeViewCB').DoSetCheck(false, "Root");
	//User clicks on node "Root;RootNode2;RootNode2Node4" in "treeViewCB"
	SeS('treeViewCB').DoClickNode("Root;RootNode2;RootNode2Node4");
	//User toggles "treeViewCB" in window "AUTDotNet2"	
	SeS('treeViewCB').DoSetCheck(false, "Root;RootNode2");
	//User toggles "treeViewCB" in window "AUTDotNet2"
	SeS('treeViewCB').DoSetCheck(false, "Root;RootNode2;RootNode2Node4");
	//Verify that: Checked=false
	Tester.AssertEqual("Verify that: Checked=false", SeS('treeViewCB').GetChecked("Root;RootNode2;RootNode2Node4"), false);
	//Verify that: Expanded=false
	Tester.AssertEqual("Verify that: Expanded=false", SeS('treeViewCB').GetExpanded("Root;RootNode2;RootNode2Node4"), false);
	//Verify that: NodeText=RootNode2Node4
	Tester.AssertEqual("Verify that: NodeText=RootNode2Node4", SeS('treeViewCB').GetNodeText("Root;RootNode2;RootNode2Node4"), "RootNode2Node4");
	//Verify that: Selected=true
	Tester.AssertEqual("Verify that: Selected=true", SeS('treeViewCB').GetSelected("Root;RootNode2;RootNode2Node4"), true);
	//Verify that: IndexPath=0;1;1
	Tester.AssertEqual("Verify that: IndexPath=0;1;1", SeS('treeViewCB').GetIndexPath(), "0;1;1");
	//User clicks on node "Root;RootNode1" in "treeViewCB"
	SeS('treeViewCB').DoClickNode("Root", ";", "name", -20, 5);
	Tester.AssertEqual("Verify that: IndexPath=0", SeS('treeViewCB').GetIndexPath(), "0");
	
//Menu
	//User clicks: Menu1
	SeS('menuStrip1').DoClickItem("Menu1");
	
	//User clicks at: 49, 5 in 'Context Menu Holder'
	SeS('Context_Menu_Holder').DoRClick(49, 5);
	//User clicks: ContextItem1;ContextItem1Item1
	SeS('contextMenuStrip1').DoMenu("ContextItem1;ContextItem1Item1");

	//User clicks: Menu1;Menu1Item2;Menu1Item2Item1
	SeS('menuStrip1').DoMenu("Menu1;Menu1Item2;Menu1Item2Item1");
	
	//User clicks: Menu2;Menu2Item2
	SeS('menuStrip1').DoMenu("Menu2@Menu2Item2", "@");

//Grid
	//User clicks grid cell [1,0] in "dataGridView1"
	SeS('dataGridView1').DoClickCell(1, 0);
	//User clicks grid cell [1,1] in "dataGridView1"
	SeS('dataGridView1').DoClickCell(1, 1);
	//User clicks grid cell [columnheader,1] in "dataGridView1"
	SeS('dataGridView1').DoClickCell("columnheader", 1);
	//User clicks grid cell [rowheader,1] in "dataGridView1"
	SeS('dataGridView1').DoClickCell("rowheader", 1);
	//User clicks grid cell [topleftheader,%param1%] in "dataGridView1"
	SeS('dataGridView1').DoClickCell("topleftheader");
	
	//User clicks grid cell [0,0] in "dataGridView1"
	SeS('dataGridView1').DoClickCell(0, 0);
	//Verify that: Cell=Column0Row0
	Tester.AssertEqual("Verify that: Cell=Column0Row0", SeS('dataGridView1').GetCell(), "Column0Row0");
	//Verify that: ColumnCount=3
	Tester.AssertEqual("Verify that: ColumnCount=3", SeS('dataGridView1').GetColumnCount(), 3);
	//Verify that: RowCount=4
	Tester.AssertEqual("Verify that: RowCount=4", SeS('dataGridView1').GetRowCount(), 4);
	//Verify that: Text=Column0Row0
	Tester.AssertEqual("Verify that: Text=Column0Row0", SeS('dataGridView1').GetText(), "Column0Row0");
}

function TestInit()
{
	Global.DoLaunch("AUTDotNet.exe", null, true);
}

function TestFinish()
{
	Global.DoKillByPid(0);
}

g_load_libraries=["Managed", "DevExpress"];


